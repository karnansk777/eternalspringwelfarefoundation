import { db } from './db.js';

export const findAllPrograms = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM programs', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

export const findProgramById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM programs WHERE id=?', [id], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

export const insertProgram = (data) => {
  const { title, short_description, full_description, image_url } = data;

  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO programs (title, short_description, full_description, image_url) VALUES (?, ?, ?, ?)',
      [title, short_description, full_description, image_url],
      (err, result) => {
        if (err) reject(err);
        else resolve({ id: result.insertId, ...data });
      }
    );
  });
};

export const updateProgramById = (id, data) => {
  const { title, short_description, full_description, image_url } = data;

  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE programs SET title=?, short_description=?, full_description=?, image_url=? WHERE id=?',
      [title, short_description, full_description, image_url, id],
      (err) => {
        if (err) reject(err);
        else resolve({ id, ...data });
      }
    );
  });
};

export const deleteProgramById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM programs WHERE id=?', [id], (err) => {
      if (err) reject(err);
      else resolve({ message: 'Deleted successfully', id });
    });
  });
};