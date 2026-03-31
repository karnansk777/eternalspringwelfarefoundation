import { db } from "./db.js";

// GET ALL (ADMIN)
export const findAllMessages = () => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM contact_messages ORDER BY created_at DESC",
      (err, res) => {
        if (err) reject(err);
        else resolve(res);
      }
    );
  });
};

// INSERT (USER FORM)
export const insertMessage = (data) => {
  const { name, email, message } = data;

  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO contact_messages (name, email, message, created_at)
       VALUES (?, ?, ?, NOW())`,
      [name, email, message],
      (err, result) => {
        if (err) reject(err);
        else resolve({ id: result.insertId, ...data });
      }
    );
  });
};

// DELETE (ADMIN)
export const deleteMessageById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM contact_messages WHERE id=?", [id], (err) => {
      if (err) reject(err);
      else resolve({ message: "Deleted", id });
    });
  });
};