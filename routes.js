const express = require("express");
const Character = require("./models/char");
const router = express.Router();

// Create a new character
router.post("/characters", async (req, res) => {
  try {
    const character = new Character(req.body);
    await character.save();
    res.status(201).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all characters
router.get("/characters", async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single character by ID
router.get("/characters/:id", async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) return res.status(404).json({ error: "Character not found" });
    res.json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a character by ID
router.put("/characters/:id", async (req, res) => {
  try {
    const character = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!character) return res.status(404).json({ error: "Character not found" });
    res.json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a character by ID
router.delete("/characters/:id", async (req, res) => {
  try {
    const character = await Character.findByIdAndDelete(req.params.id);
    if (!character) return res.status(404).json({ error: "Character not found" });
    res.json({ message: "Character deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
