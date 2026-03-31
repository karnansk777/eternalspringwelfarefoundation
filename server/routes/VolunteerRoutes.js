import express from "express";
import {
  getVolunteersController,
  createVolunteerController,
  deleteVolunteerController,
} from "../controllers/VolunteerController.js";

import { isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC → Volunteer form submit
router.post("/", createVolunteerController);

// ADMIN → Get all volunteers
router.get("/", isAdmin, getVolunteersController);

// ADMIN → Delete volunteer
router.delete("/:id", isAdmin, deleteVolunteerController);

export default router;