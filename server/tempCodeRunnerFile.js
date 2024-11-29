const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ARModel = require('./models/AR')
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/AR");
const bcrypt = require('bcrypt');  // Add bcrypt for password hashing

// Signup API
app.post("/register", async (req, res) => {
  console.log("recieved data:", req.body);
  ARModel.create(req.body)
  .then(AR => res.json(AR))
  .catch(err => res.json(err))
  const { password } = req.body;
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new ARModel({ ...req.body, password: hashedPassword });
    
    // Save the user to the database
    await user.save();
    res.json({ message: "User registered successfully!", user });
  } catch (err) {
    res.status(500).json({ message: "Error during registration", error: err });
  }
});

 // Login API
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await ARModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      console.log("User found:", user); 
      // Compare the provided password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      res.json({ message: "Login successful", user });
    } catch (err) {
      res.status(500).json({ message: "Error during login", error: err });
    }
  });
  
  

// Start the Server
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

