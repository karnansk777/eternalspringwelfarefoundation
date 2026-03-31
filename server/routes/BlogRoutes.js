import express from "express";
import {
  getBlogsController,
  getBlogController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
} from "../controllers/BlogController.js";
import { isAdmin } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.get("/", isAdmin, getBlogsController);
router.get("/:id", isAdmin, getBlogController);

router.post("/", isAdmin, upload.single("image"), createBlogController);
router.put("/:id", isAdmin, upload.single("image"), updateBlogController);
router.delete("/:id", isAdmin, deleteBlogController);

export default router;