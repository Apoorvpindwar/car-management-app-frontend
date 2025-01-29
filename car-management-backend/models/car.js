const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String], // Array of Cloudinary URLs
  tags: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Car", carSchema);
