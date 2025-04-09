import {
    createUserTable,
    insertUser,
    insertMultipleUsers,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
  } from '../models/userModel.js';
  
  // Run once to ensure table exists
  createUserTable();
  
  export const createUser = async (req, res) => {
    const { name, age } = req.body;
    await insertUser(name, age);
    res.json({ message: 'User added successfully' });
  };
  
  export const createManyUsers = async (req, res) => {
    const users = req.body.users; 
    await insertMultipleUsers(users);
    res.json({ message: 'Users inserted successfully' });
  };
  
  export const fetchAllUsers = async (req, res) => {
    const users = await getAllUsers();
    res.json(users);
  };
  
  export const fetchUserById = async (req, res) => {
    const id = req.params.id;
    const user = await getUserById(id);
    if (user.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(user[0]);
  };
  
  export const modifyUser = async (req, res) => {
    const id = req.params.id;
    const { name, age } = req.body;
    await updateUser(id, name, age);
    res.json({ message: 'User updated successfully' });
  };
  
  export const removeUser = async (req, res) => {
    const id = req.params.id;
    await deleteUser(id);
    res.json({ message: 'User deleted successfully' });
  };

