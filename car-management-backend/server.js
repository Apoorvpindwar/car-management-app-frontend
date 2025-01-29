require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const carRoutes = require("./routes/cars");

const app = express();

// Enable CORS with specific settings
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from the frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
  credentials: true // Enable sending cookies if required
}));

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("Car Management API is running...");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);

// Define the Port
const PORT = process.env.PORT || 3001; // Use .env port or default to 3001

// Start the Server
app.listen(PORT, () => {
  console.log(`Application start ho gayi hai on port ${PORT}`);
});
