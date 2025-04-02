const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  alias: { type: String, required: true },
  description: { type: String, required: true },
  personalityTraits: { type: [String], required: true },
  commonScenarios: { type: [String], required: true },
  avatar: { type: String, default: "default-avatar.png" }, // URL or path to image
}, { timestamps: true });

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;