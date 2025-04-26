# Furniqo - 3D Interior Design Platform

Welcome to **Furniqo** — a project developed for the **PUSL3122 Human Computer Interaction (HCI)** module at the University of Plymouth.  
Furniqo is a next-generation interior design platform that enables users to **design, customize, and visualize rooms in both 2D and immersive 3D environments** with ease and flexibility.

![Furniqo Banner](./assets/banner.png)

---

## 🚀 Live Demo

> **🔗 Project Hosting Link:** [Visit Furniqo Live](https://your-hosting-link.com)

---

## 🎥 Demo Video

> See how Furniqo works!  
>  
> ![Demo Video](https://your-demo-video-link.com/demo-preview.gif)  
> *(Note: Add a `.gif` version of the video preview here if available)*

---

## 📂 Project Structure


```
Furniqo/
├── furniqo/         # Frontend (React.js + TailwindCSS + Framer Motion)
├── backend/         # Backend (Node.js + Express + MongoDB)
├── furniqo-3D/      # 3D Interior Design Engine (Three.js + Blueprint3D)
```

---

## ⚙️ Tech Stack

### Frontend
- **React.js** — UI Framework
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **React Toastify** — Notifications
- **Vite** — Lightning-fast build tool

### Backend
- **Node.js** — Server-side JavaScript
- **Express.js** — API Framework
- **MongoDB** — Database
- **JWT Authentication** — Secure user login

### 3D Engine (Furniqo 3D)
- **TypeScript** — Core Logic (81%)
- **Three.js** — 3D Rendering Engine
- **Blueprint3D** — Custom 3D Room Designer
- **Python SimpleHTTPServer** — Local server for testing

### Development Tools
- **npm** — Package Manager
- **Grunt** — Build automation (furniqo-3D)

---

## 🛠 How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/Nimnaka00/Furniqo.git
cd furniqo
```

### 2. Install Dependencies
```bash
# Install tools
npm install concurrently --save-dev

# Install frontend
cd furniqo
npm install

# Install backend
cd ../backend
npm install

# Install 3D Engine (optional)
cd ../furniqo-3D
npm install --legacy-peer-deps
grunt
```

### 3. Run the Project

Use a single command via `concurrently`:

```bash
npm run dev
```

Or manually run:
```bash
# Frontend
cd furniqo
npm run dev

# Backend
cd ../backend
npm run dev

# 3D Server
cd ../furniqo-3D
cd furniqo-3d
python -m http.server
```

---

## 📸 Screenshots

| Home Page | 3D Designer |
|:---------:|:-----------:|
| ![Home](./assets/screenshot-home.png) | ![3D](./assets/screenshot-3d.png) |

---

## ✨ Features
- User and Admin Authentication 🔐
- Beautiful Animated UI ✨
- 2D & 3D Room Planning 📐
- User Profile Management 🧑‍💼
- Admin Dashboard (Manage Users & Designs) ⚙️
- Real-time Design Support 🛋️

---

> _"Design your dream space with ease. Welcome to the future of interior designing with Furniqo!"_

---

#️⃣ **#ReactJS #NodeJS #MongoDB #ThreeJS #InteriorDesign #3DModeling #Furniqo**
