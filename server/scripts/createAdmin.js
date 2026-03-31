import { db } from '../models/db.js';
import bcrypt from 'bcrypt';

const email = 'admin@eswf.org';
const password = 'admin123';
const hashedPassword = bcrypt.hashSync(password, 10);

const query = `
INSERT INTO admin_users (email, password_hash, role, created_at)
VALUES (?, ?, 'admin', NOW())
`;

db.query(query, [email, hashedPassword], (err, result) => {
  if (err) console.log('Error:', err);
  else console.log('Admin created successfully!');
  process.exit();
});