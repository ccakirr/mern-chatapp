<div align="center">

# 💬 ChatApp

### Modern Real-Time Chat Application

A full-stack chat application built with the MERN stack, featuring real-time messaging, user authentication, and a sleek UI.

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Demo](#-https://mern-chatapp-production-a75e.up.railway.app/) • [Features](#-features) • [Installation](#-installation) • [Usage](#-usage)

</div>

---

## ✨ Features

<table>
<tr>
<td>

**🔐 Authentication**
- Secure sign up & login
- JWT-based sessions
- Profile management

</td>
<td>

**💬 Real-Time Chat**
- Instant messaging
- Socket.io integration
- Message history

</td>
</tr>
<tr>
<td>

**👥 User Management**
- Profile photo upload
- Online status tracking
- User search

</td>
<td>

**🎨 Modern UI**
- Responsive design
- Dark mode support
- Smooth animations

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

### Frontend
```
⚛️  React (Vite)        🎨  Tailwind CSS
🔄  Zustand             🔌  Socket.io Client
🍞  React Hot Toast     🎯  Lucide Icons
```

### Backend
```
🟢  Node.js             📦  Express.js
🍃  MongoDB (Mongoose)  🔌  Socket.io
☁️   Cloudinary          🔑  JWT & Cookies
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** v16+ 
- **MongoDB** account
- **Cloudinary** account

### Installation

1️⃣ **Clone the repository**
```bash
git clone https://github.com/ccakirr/mern-chatapp.git
cd mern-chatapp
```

2️⃣ **Backend Setup**
```bash
cd backend
npm install
```

3️⃣ **Frontend Setup**
```bash
cd frontend
npm install
```

4️⃣ **Environment Variables**

Create `.env` in the `backend` directory:

```env
MONGODB_URL=your_mongodb_connection_string
PORT=5001
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

---

## 💻 Usage

### Development Mode

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

### Production Build

```bash
# Build frontend
cd frontend
npm run build

# Start production server
cd ../backend
npm start
```

---

## 📁 Project Structure

```
mern-chatapp/
│
├── 📂 backend/
│   ├── 📂 src/
│   │   ├── 📂 controllers/    # Request handlers
│   │   ├── 📂 lib/            # Utilities & config
│   │   ├── 📂 middleware/     # Auth & validation
│   │   ├── 📂 models/         # Database schemas
│   │   ├── 📂 routes/         # API routes
│   │   └── 📄 index.js        # Server entry
│   └── 📄 package.json
│
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── 📂 components/     # React components
│   │   ├── 📂 lib/            # Client utilities
│   │   ├── 📂 pages/          # Page components
│   │   ├── 📂 store/          # Zustand stores
│   │   └── 📄 App.jsx         # App entry
│   └── 📄 package.json
│
└── 📄 README.md
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** 

---

<div align="center">

### 👨‍💻 Built with ❤️ by [Caner Çakır](https://github.com/ccakirr)

⭐ Star this repo if you found it helpful!

</div>
```
