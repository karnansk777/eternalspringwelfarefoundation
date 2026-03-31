import { db } from './db.js';

export const findAllProjects = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM projects', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

export const findProjectById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM projects WHERE id=?', [id], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

export const insertProject = (data) => {
  const { title, description, image_url } = data;
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO projects (title, description, image_url) VALUES (?, ?, ?)',
      [title, description, image_url],
      (err, result) => {
        if (err) reject(err);
        else resolve({ id: result.insertId, ...data });
      }
    );
  });
};

export const updateProjectById = (id, data) => {
  const { title, description, image_url } = data;
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE projects SET title=?, description=?, image_url=? WHERE id=?',
      [title, description, image_url, id],
      (err) => {
        if (err) reject(err);
        else resolve({ id, ...data });
      }
    );
  });
};

export const deleteProjectById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM projects WHERE id=?', [id], (err) => {
      if (err) reject(err);
      else resolve({ message: 'Deleted successfully', id });
    });
  });
};