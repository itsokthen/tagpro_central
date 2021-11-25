import mongoose from "mongoose";

const playersSchema = mongoose.Schema({
  name: String,
  team: String,
  minutes: Number,
  tags: Number,
  hold: Number,
  caps: Number,
  returns: Number,
});

const players = mongoose.model("players", playersSchema);

export default players;
