import { db } from './db.js';

export const findAdminByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM admin_users WHERE email=?', [email], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

export const createAdminUser = (data) => {
  const { email, password_hash, role } = data;

  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO admin_users (email, password_hash, role) VALUES (?, ?, ?)',
      [email, password_hash, role],
      (err, result) => {
        if (err) reject(err);
        else resolve({ id: result.insertId, ...data });
      }
    );
  });
};

export const saveResetToken = (email, token, expiry) => {
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE admin_users SET reset_token=?, reset_token_expiry=? WHERE email=?',
      [token, expiry, email],
      (err) => {
        if (err) reject(err);
        else resolve(true);
      }
    );
  });
};

export const findByResetToken = (token) => {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM admin_users WHERE reset_token=? AND reset_token_expiry > NOW()',
      [token],
      (err, results) => {
        if (err) reject(err);
        else resolve(results[0]);
      }
    );
  });
};

export const updatePassword = (id, password_hash) => {
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE admin_users SET password_hash=?, reset_token=NULL, reset_token_expiry=NULL WHERE id=?',
      [password_hash, id],
      (err) => {
        if (err) reject(err);
        else resolve(true);
      }
    );
  });
};