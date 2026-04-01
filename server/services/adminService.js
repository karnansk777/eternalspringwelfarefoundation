import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import {
  findAdminByEmail,
  createAdminUser,
  saveResetToken,
  findByResetToken,
  updatePassword
} from '../models/AdminModel.js';

const getJwtExpiry = () => {
  const raw = (process.env.JWT_ACCESS_TTL || '').trim().replace(/^['"]|['"]$/g, '');
  return raw || '15m';
};

export const loginAdminService = async (email, password) => {
  const admin = await findAdminByEmail(email);
  if (!admin) throw new Error('Invalid credentials');

  const isMatch = bcrypt.compareSync(password, admin.password_hash);
  if (!isMatch) throw new Error('Invalid credentials');

  const accessToken = jwt.sign(
    { id: admin.id, role: admin.role },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: getJwtExpiry() }
  );

  return { accessToken };
};

// 🔥 CREATE CO-ADMIN
export const createCoAdminService = async (email, password) => {
  const existing = await findAdminByEmail(email);
  if (existing) throw new Error("User already exists");

  const hash = bcrypt.hashSync(password, 10);

  return await createAdminUser({
    email,
    password_hash: hash,
    role: "co-admin",
  });
};

// 🔥 FORGOT PASSWORD
export const forgotPasswordService = async (email) => {
  const user = await findAdminByEmail(email);
  if (!user) throw new Error("User not found");

  const token = crypto.randomBytes(32).toString("hex");
  const expiry = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

  await saveResetToken(email, token, expiry);

  return { token }; // later email send pannalam
};

// 🔥 RESET PASSWORD
export const resetPasswordService = async (token, newPassword) => {
  const user = await findByResetToken(token);
  if (!user) throw new Error("Invalid or expired token");

  const hash = bcrypt.hashSync(newPassword, 10);

  await updatePassword(user.id, hash);

  return true;
};