const express = require("express");
const app = express();
const sequelize = require("./config/database");
const moviesRoutes = require('./routes/movies.routes')
const userRoutes = require('./routes/user.routes');

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(moviesRoutes);
app.use(userRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log(error.message)
  })
  .catch((error) => {
    console.log(error.message);
  });

  module.exports = app;