import db from '../config/db.js';

export const createUserTable = async () => {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      age INT
    )
  `);
};

export const insertUser = async (name, age) => {
  await db.execute('INSERT INTO users (name, age) VALUES (?, ?)', [name, age]);
};

export const insertMultipleUsers = async (users) => {
  await db.query('INSERT INTO users (name, age) VALUES ?', [users]);
};

export const getAllUsers = async () => {
  const [rows] = await db.execute('SELECT * FROM users');
  return rows;
};

export const getUserById = async (id) => {
  const [user] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
  return user;
};

export const updateUser = async (id, name, age) => {
  await db.execute('UPDATE users SET name = ?, age = ? WHERE id = ?', [name, age, id]);
};

export const deleteUser = async (id) => {
  await db.execute('DELETE FROM users WHERE id = ?', [id]);
};



