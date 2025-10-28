const express = require("express");
const Movies = require("../models/Movies");
const {
  getAllMovies,
  createNewMovie,
  updateMovies,
  deleteMovies,
} = require("../controllers/movies.controller");
const { del } = require("superagent");
const router = express.Router();

router.get("/movies", getAllMovies);
router.post("/movies", createNewMovie);
router.patch("/:id", updateMovies);
router.delete("/:id", deleteMovies)

router.put("/movies/:id", (req, res) => {
  res.send(`Update Movie with ID ${req.params.id}`);
});

router.delete("/movies/:id", (req, res) => {
  res.send(`Delete Movie with ID ${req.params.id}`);
});

module.exports = router;