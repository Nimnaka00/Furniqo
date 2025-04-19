import express from "express";
import {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
  } from "../controllers/authController.js";
  import { authMiddleware } from "../middleware/authMiddleware.js"; 

const router = express.Router();

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getUserProfile);
router.put("/update", authMiddleware, updateUserProfile);


export default router;

