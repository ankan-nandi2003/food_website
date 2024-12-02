const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

// Create a user
router.post("/", async (req, res) => {
  try {
    const { name, email, password, loaction } = req.body;
    if (!name || !email || !password || !location) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const user = await User.create({ name, email, password, loaction });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ message: "Fetched users successfully", users });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

module.exports = router;
