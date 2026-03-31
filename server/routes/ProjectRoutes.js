import express from "express";
import {
  getProjectsController,
  getProjectController,
  createProjectController,
  updateProjectController,
  deleteProjectController,
} from "../controllers/ProjectController.js";
import { isAdmin } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();
router.get("/public", getProjectsController);

router.get("/", isAdmin, getProjectsController);
router.get("/:id", isAdmin, getProjectController);
// PUBLIC GET (NO TOKEN)
// Use upload.single("image") to accept image file
router.post("/", isAdmin, upload.single("image"), createProjectController);
router.put("/:id", isAdmin, upload.single("image"), updateProjectController);
router.delete("/:id", isAdmin, deleteProjectController);

export default router;