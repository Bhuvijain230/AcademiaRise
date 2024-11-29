const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ARModel = require('./models/AR');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// Allow requests from frontend (e.g., localhost:3000)
app.use(cors({
  origin: "http://localhost:3000", // Adjust this if the frontend URL changes
  methods: ["GET", "POST"],
}));

mongoose.connect("mongodb://127.0.0.1:27017/AR", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Signup API
app.post("/register", async (req, res) => {
  const { password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new ARModel({ ...req.body, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: "User registered successfully!", user });
  } catch (err) {
    res.status(500).json({ message: "Error during registration", error: err });
  }
});

// Login API
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Received Login credentials:", email,password);
  try {
    const user = await ARModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  console.log("Stored password(hashed):",user.password);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "Invalid credentials" ,
        redirectTo: "/AcademiaRise"
        
      });
    }

    res.json({ message: "Login successful", user ,
      redirectTo: "/AcademiaRise"

    });
  } catch (err) {
    res.status(500).json({ message: "Error during login", error: err });
  }
});

// Start the Server
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
