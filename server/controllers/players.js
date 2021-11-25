import players from "../models/players.js";

export const getPlayers = async (req, res) => {
  try {
    const allPlayers = await players.find();

    res.status(200).json(allPlayers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPlayers = async (req, res) => {
  const player = req.body;

  const newPlayer = new players(players);

  try {
    await newPlayer.save();
    res.staus(201).json(newPlayer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
