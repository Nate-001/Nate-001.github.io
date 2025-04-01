const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define Recommendation Schema
const recommendationSchema = new mongoose.Schema({
  name: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Recommendation = mongoose.model("Recommendation", recommendationSchema);

// API Endpoints
app.get("/recommendations", async (req, res) => {
  const recommendations = await Recommendation.find();
  res.json(recommendations);
});

app.post("/recommendations", async (req, res) => {
  const newRecommendation = new Recommendation(req.body);
  await newRecommendation.save();
  res.status(201).json(newRecommendation);
});

// Start Server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
