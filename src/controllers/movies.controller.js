const Movies = require("../src/config/models/Movies");

async function getAllMovies(req, res) {
  try {
    const movies = await Movies.findAll();

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
}

async function createNewMovie(req, res) {
  try {
    console.log(req.body);
    await Movies.create(req.body);

    res.status(201).json({ message: "Movie created successfully" });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: "An error occurred" });
  }
}

module.exports = {
  getAllMovies,
  createNewMovie
};