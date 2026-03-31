import express from "express";
import {
  getProgramsController,
  getProgramController,
  createProgramController,
  updateProgramController,
  deleteProgramController,
} from "../controllers/ProgramController.js";

import { isAdmin } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

// ✅ FIXED ORDER
router.get("/public", getProgramsController);
router.get("/", isAdmin, getProgramsController);
router.get("/:id", isAdmin, getProgramController);

router.post("/", isAdmin, upload.single("image"), createProgramController);
router.put("/:id", isAdmin, upload.single("image"), updateProgramController);
router.delete("/:id", isAdmin, deleteProgramController);

export default router;