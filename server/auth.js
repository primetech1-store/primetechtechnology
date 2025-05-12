const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// User schema
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});
const User = mongoose.model("User", userSchema);

// Signup
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Missing fields" });
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ error: "Email already registered" });
  const hashed = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashed });
  res.json({ message: "Signup successful" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "Invalid credentials" });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: "Invalid credentials" });
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

module.exports = router;