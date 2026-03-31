import { db } from "./db.js";

// GET ALL
export const findAllVolunteers = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM volunteers ORDER BY created_at DESC", (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

// GET ONE
export const findVolunteerById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM volunteers WHERE id=?", [id], (err, res) => {
      if (err) reject(err);
      else resolve(res[0]);
    });
  });
};

// INSERT (from user form)
export const insertVolunteer = (data) => {
  const { name, email, phone, skills, availability, message } = data;

  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO volunteers 
      (name, email, phone, skills, availability, message, created_at) 
      VALUES (?, ?, ?, ?, ?, ?, NOW())`,
      [name, email, phone, skills, availability, message],
      (err, result) => {
        if (err) reject(err);
        else resolve({ id: result.insertId, ...data });
      }
    );
  });
};

// DELETE
export const deleteVolunteerById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM volunteers WHERE id=?", [id], (err) => {
      if (err) reject(err);
      else resolve({ message: "Deleted", id });
    });
  });
};