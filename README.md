
#**ChatApp 💬**

A modern, full-stack real-time chat application built with the MERN stack, Socket.io, Zustand, and Tailwind CSS.

✨ **Features**
- 🔐 User authentication (sign up, login, logout, profile update)
- 🖼️ Profile photo upload with Cloudinary
- 💬 Real-time messaging with Socket.io
- 🟢 Live online user tracking in the sidebar
- 🎨 Responsive UI with Tailwind CSS
- ⚡ State management with Zustand

🛠️ **Tech Stack**

**Frontend:**
- React (Vite)
- Zustand
- Socket.io-client
- Tailwind CSS
- React Hot Toast
- Lucide Icons

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Socket.io
- Cloudinary
- JWT & Cookies
- CORS

🚀 **Getting Started**

**Prerequisites:**
- Node.js (v16 or higher)
- MongoDB account
- Cloudinary account

**Installation:**
1. Clone the repository

	 ```bash
	 git clone https://github.com/yourusername/mern-chatapp.git
	 cd mern-chatapp
	 ```
2. Install backend dependencies

	 ```bash
	 cd backend
	 npm install
	 ```
3. Install frontend dependencies

	 ```bash
	 cd ../frontend
	 npm install
	 ```
4. Configure environment variables

	 Create a `.env` file in the backend directory:
	 ```env
	 MONGODB_URL=your_mongodb_connection_string
	 PORT=5001
	 CLOUDINARY_CLOUD_NAME=your_cloud_name
	 CLOUDINARY_API_KEY=your_api_key
	 CLOUDINARY_API_SECRET=your_api_secret
	 JWT_SECRET=your_jwt_secret
	 NODE_ENV=development
	 ```

**Running the Application:**

- **Backend:**
	```bash
	cd backend
	npm run dev
	```
- **Frontend:**
	```bash
	cd frontend
	npm run dev
	```

**Production Mode:**
- Build the frontend:
	```bash
	cd frontend
	npm run build
	```
- Start the server:
	```bash
	cd ../backend
	npm start
	```

📁 **Project Structure**

mern-chatapp/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   └── App.jsx
│   └── package.json
└── README.md

🤝 **Contributing**

Contributions are welcome! Feel free to open issues or submit pull requests.

📄 **License**

This project is open source and available under the MIT License.

👤 **Author**

Caner Çakır
- GitHub: @ccakirr
