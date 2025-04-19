import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'; // 👈 NEW

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // 👈 Signup/Login routes

// Base route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Port config
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
