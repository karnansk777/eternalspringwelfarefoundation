import express from "express";
import {
  loginAdminController,
  createCoAdminController,
  forgotPasswordController,
  resetPasswordController,
} from "../controllers/adminController.js";

import { isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginAdminController);

// 🔥 ONLY ADMIN CAN CREATE CO-ADMIN
router.post("/create-coadmin", isAdmin, createCoAdminController);

// 🔥 FORGOT PASSWORD
router.post("/forgot-password", forgotPasswordController);

// 🔥 RESET PASSWORD
router.post("/reset-password", resetPasswordController);

// DASHBOARD
router.get("/dashboard", isAdmin, (req, res) => {
  res.json({ message: `Welcome ${req.user.role} ID: ${req.user.id}` });
});

export default router;