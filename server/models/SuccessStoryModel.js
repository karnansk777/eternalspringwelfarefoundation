import { db } from './db.js';

export const findAllStories = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM success_stories ORDER BY id DESC', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

export const findStoryById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM success_stories WHERE id=?', [id], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

export const insertStory = (data) => {
  const { title, description, image_url } = data;
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO success_stories (title, description, image_url) VALUES (?, ?, ?)',
      [title, description, image_url],
      (err, result) => {
        if (err) reject(err);
        else resolve({ id: result.insertId, ...data });
      }
    );
  });
};

export const updateStoryById = (id, data) => {
  const { title, description, image_url } = data;
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE success_stories SET title=?, description=?, image_url=? WHERE id=?',
      [title, description, image_url, id],
      (err) => {
        if (err) reject(err);
        else resolve({ id, ...data });
      }
    );
  });
};

export const deleteStoryById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM success_stories WHERE id=?', [id], (err) => {
      if (err) reject(err);
      else resolve({ message: 'Deleted successfully', id });
    });
  });
};