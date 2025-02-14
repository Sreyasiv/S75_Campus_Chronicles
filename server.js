require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Debugging: Check if .env is loading correctly
console.log("MONGO_URI:", process.env.MONGO_URI); // Add this line

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("❌ Database connection failed:", err));

// Home Route
app.get("/", (req, res) => {
  const status = mongoose.connection.readyState === 1 ? "Connected" : "Disconnected";
  res.send(`Database Connection Status: ${status}`);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
