const express = require('express');
const mongoose = require('mongoose');
const report = require("../model/reporting")
var router = express.Router();
const dotenv = require("dotenv")
dotenv.config()
const URL = process.env.DB ;



mongoose.connect(URL, {
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));




router.post('/create', async (req, res) => {
  try {
    const newUser = new report(req.body);
    await newUser.save();
    res.send(newUser)
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


  
 // Read all users
router.get('/getAll', async (req, res) => {
  try {
    const users = await report.find();
    res.status(200).json({ message: 'Successfully fetched users', users: users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;