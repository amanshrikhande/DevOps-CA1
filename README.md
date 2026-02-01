# 📝 Todo App (MERN Stack)

A full-stack **Todo Management Application** built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
It allows users to **register, log in, and manage their daily tasks** efficiently — all backed by secure authentication and cloud-hosted database storage on **MongoDB Atlas**.

---

## 🚀 Overview

This Todo app is a complete CRUD (Create, Read, Update, Delete) web application that helps users organize their tasks with a simple and intuitive interface.  
It includes **user authentication**, **JWT-based session management**, and a **responsive React frontend** for a smooth user experience.

---

## 🧩 Features

✅ **User Authentication**
- Signup and Login using secure JWT tokens  
- Passwords hashed using bcrypt before saving to MongoDB  

✅ **Todo Management**
- Add, edit, and delete todos  
- Mark todos as completed or pending  
- Each user has a private todo list (data isolation per user)

✅ **Modern Frontend**
- Built with **React.js** and styled for responsive design  
- Uses React Hooks (useState, useEffect) for efficient UI state management  

✅ **Backend API**
- RESTful APIs built using **Node.js** and **Express.js**  
- Middleware for authentication and request validation  

✅ **Database**
- **MongoDB Atlas** for cloud-based document storage  
- Mongoose ODM for schema and model handling  

✅ **Secure & Scalable**
- Environment variables managed through `.env`  
- CORS and Helmet configured for security  

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React.js |
| Backend | Node.js + Express.js |
| Database | MongoDB Atlas |
| Authentication | JWT (JSON Web Tokens) + bcrypt |
| Styling | Tailwind CSS |

---

## Running files locally
STEP 1: 
git clone https://github.com/amanshrikhande/SIT-Flexi-Final-CA.git
cd SIT-Flexi-Final-CA

STEP 2:
cd backend
npm install

STEP 3:
cd ../frontend
npm install

STEP 4:
Setup .env file

STEP 5:
run backend: node index.js
run frontend: npm run dev
