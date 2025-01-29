const express = require("express");
const Car = require("../models/Car");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const { title, description, tags, images } = req.body;
  const car = new Car({ title, description, tags, images, owner: req.user.userId });
  await car.save();
  res.status(201).json(car);
});

router.get("/", authMiddleware, async (req, res) => {
  const cars = await Car.find({ owner: req.user.userId });
  res.json(cars);
});

router.get("/search", authMiddleware, async (req, res) => {
  const keyword = req.query.q;
  const cars = await Car.find({
    owner: req.user.userId,
    $or: [
      { title: new RegExp(keyword, "i") },
      { description: new RegExp(keyword, "i") },
      { tags: new RegExp(keyword, "i") },
    ],
  });
  res.json(cars);
});

router.get("/:id", authMiddleware, async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.json(car);
});

router.put("/:id", authMiddleware, async (req, res) => {
  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedCar);
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ message: "Car deleted" });
});

module.exports = router;
