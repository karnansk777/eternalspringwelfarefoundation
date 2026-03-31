import { db } from './db.js';

export const findAllBlogs = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM blogs ORDER BY created_at DESC', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

export const findBlogById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM blogs WHERE id=?', [id], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

export const insertBlog = (data) => {
    const { title, description, content, slug, image_url } = data;
  
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO blogs (title, slug, content, description, image_url) VALUES (?, ?, ?, ?, ?)',
        [title, slug, content, description, image_url],
        (err, result) => {
          if (err) reject(err);
          else resolve({ id: result.insertId, ...data });
        }
      );
    });
  };

  export const updateBlogById = (id, data) => {
    const { title, description, content, slug, image_url } = data;
  
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE blogs SET title=?, slug=?, content=?, description=?, image_url=? WHERE id=?',
        [title, slug, content, description, image_url, id],
        (err) => {
          if (err) reject(err);
          else resolve({ id, ...data });
        }
      );
    });
  };

export const deleteBlogById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM blogs WHERE id=?', [id], (err) => {
      if (err) reject(err);
      else resolve({ message: 'Deleted successfully', id });
    });
  });
};