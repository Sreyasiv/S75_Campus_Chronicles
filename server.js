require("dotenv").config();
console.log(process.env.MONGO_URI);
const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

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

// Ping Route
app.get("/ping", (req, res) => {
  res.send("pong 🏓");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
