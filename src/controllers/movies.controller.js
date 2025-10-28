const Movies = require("../models/Movies");
const { del } = require("superagent");

async function getAllMovies(req, res) {
  try {
    const movies = await Movies.findAll();
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}

async function createNewMovie(req, res) {
  try {
    await Movies.create(req.body);
    res.status(201).json({ message: "Movie created successfully" });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: "An error occurred" });
  }
}

async function updateMovies(req, res) {
  try {
    const { id } = req.params;
    await Movies.update(req.body, { where: { id } });
    res.status(200).json({ message: "Movie updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}

async function deleteMovies(req, res) {
  try {
    const { id } = req.params;
    await Movies.destroy({ where: { id } });
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}

module.exports = {
  getAllMovies,
  createNewMovie,
  updateMovies,
  deleteMovies
};
