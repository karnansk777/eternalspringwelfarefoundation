import {
  loginAdminService,
  createCoAdminService,
  forgotPasswordService,
  resetPasswordService,
} from "../services/adminService.js";

export const loginAdminController = async (req, res) => {
  try {
    const data = await loginAdminService(req.body.email, req.body.password);
    res.json(data);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

// 🔥 CREATE CO-ADMIN
export const createCoAdminController = async (req, res) => {
  try {
    const result = await createCoAdminService(req.body.email, req.body.password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 🔥 FORGOT
export const forgotPasswordController = async (req, res) => {
  try {
    const result = await forgotPasswordService(req.body.email);
    res.json({ message: "Reset token generated", ...result });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 🔥 RESET
export const resetPasswordController = async (req, res) => {
  try {
    await resetPasswordService(req.body.token, req.body.password);
    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};