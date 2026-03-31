import express from "express";
import {
  getStoriesController,
  getStoryController,
  createStoryController,
  updateStoryController,
  deleteStoryController,
} from "../controllers/SuccessStoryController.js";
import { isAdmin } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();
router.get("/public", getStoriesController); // ✅ PUBLIC

router.get("/", isAdmin, getStoriesController);
router.get("/:id", isAdmin, getStoryController);

router.post("/", isAdmin, upload.single("image"), createStoryController);
router.put("/:id", isAdmin, upload.single("image"), updateStoryController);
router.delete("/:id", isAdmin, deleteStoryController);

export default router;