import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  getDashboardStats,
} from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Logout (requires user to be logged in)
router.post("/logout", authMiddleware, logoutUser); // ✅ new

// Authenticated User Routes
router.get("/profile", authMiddleware, getUserProfile);
router.put("/update", authMiddleware, updateUserProfile);

// Admin Routes
router.get("/users", authMiddleware, adminMiddleware, getAllUsers);
router.delete("/users/:id", authMiddleware, adminMiddleware, deleteUser);
router.get("/dashboard-stats", authMiddleware, adminMiddleware, getDashboardStats); // ✅ new

export default router;
