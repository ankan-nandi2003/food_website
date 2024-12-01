/*const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req, res) => {
  try {
    await User.create({
      name: "Ankan Nandi",
      password: "12345",
      email: "ankan12@hotmail.com",
      location: "kolkata",
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});
module.exports = router;*/

/*const express = require("express");
const router = express.Router();
const user = require("../models/User");

// ... other routes

router.post("/user", async (req, res) => {
  user.create({
    name: "Ankan Nandi",
    password: "12345",
    email: "ankan1234@mail.com",
    location: "kolkata",
  });
  // ... code to insert user data
});

module.exports = router;*/

const express = require("express");
const User = require("../models/modelUser");

const router = express.Router();

router.post("/user", async (req, res) => {
  try {
    const newUser = new User({
      name: "Ankan Nandi",
      password: "12345",
      email: "ankan1234@mail.com",
      location: "kolkata",
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    console.error(err);
    res.json({ error: "Failed to create user" });
  }
});
module.exports = router;

/*const express = require('express');
const bcrypt = require('bcrypt'); // Assuming you've installed bcrypt
const User = require('../models/User');

const router = express.Router();

// ... other routes

router.post('/user', async (req, res) => {
    try {
        const { name, email, password, location } = req.body;

        // Validate input (e.g., check for empty fields, valid email format, etc.)

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Adjust salt rounds as needed

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            location
        });

        await newUser.save();

        res.json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user: ' + error.message });
    }
});

module.exports = router;*/
