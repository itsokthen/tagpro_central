import players from "../models/players.js";

export const getPlayers = async (req, res) => {
  try {
    const allPlayers = await players.find();

    res.status(200).json(allPlayers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPlayers = (req, res) => {
  res.send("router is working");
};
