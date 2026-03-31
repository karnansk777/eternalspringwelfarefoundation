import express from "express";
import {
  getMessagesController,
  createMessageController,
  deleteMessageController,
} from "../controllers/ContactController.js";

import { isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC → Contact form
router.post("/", createMessageController);

// ADMIN → Get all messages
router.get("/", isAdmin, getMessagesController);

// ADMIN → Delete message
router.delete("/:id", isAdmin, deleteMessageController);

export default router;