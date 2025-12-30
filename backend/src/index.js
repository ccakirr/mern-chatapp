import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDb } from "./lib/db.js";
import path from "path";

dotenv.config();

const app = express();
const __dirname = path.resolve();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

app.use("/api/message", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Use /(.*) for universal wildcard in Express 5+
  app.get(/^(.*)$/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Online user tracking
let onlineUsers = [];

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  // When a user comes online
  socket.on("user-online", (userId) => {
    if (userId && !onlineUsers.includes(String(userId))) {
      onlineUsers.push(String(userId));
      console.log("User online:", userId, "Current online:", onlineUsers);
    }
    io.emit("online-users", onlineUsers);
    // Attach userId to socket for disconnect tracking
    socket.userId = String(userId);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id, "userId:", socket.userId);
    if (socket.userId) {
      onlineUsers = onlineUsers.filter((id) => id !== socket.userId);
      io.emit("online-users", onlineUsers);
      console.log(
        "User went offline:",
        socket.userId,
        "Current online:",
        onlineUsers
      );
    }
  });
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server has started at: ${PORT}`);
  connectDb();
});
