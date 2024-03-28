const express = require('express');
const mongoose = require('mongoose');
const User = require("../model/applicants")
var router = express.Router();
const dotenv = require("dotenv")
dotenv.config()
const URL = process.env.DB ;





mongoose.connect(URL, {
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));




router.post('/api/create', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.json(newUser);
      res.status(200).json({message:'applicants created sucessfully'})
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
    
  
  // Read all users
  router.get('/api/getAll', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
      res.status(200).json({messag:'sucessfully'})
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Read a single user
  router.get('/api/getone/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
      res.status(200).json({messag:'sucessfully'})
    } catch (err) {
      res.status(404).json({ error: 'User not found' });
    }
  });
  
  // Update a user
  router.put('/api/edit/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, mobileNo, designation, gender, course, image } = req.body;
      
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, email, mobileNo, designation, gender, course, image },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json(updatedUser);
      res.status(200).json({messag:'updated sucessfully'})
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  
  
  // Delete a user
  router.delete('/api/delete/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: 'User deleted' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  

  module.exports = router;