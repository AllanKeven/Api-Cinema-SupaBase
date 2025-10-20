const express = require("express");
const app = express();
const sequelize = require("./src/config/database");
const moviesRoutes = require('./src/routes/movies.route')

const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(moviesRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(port, () =>
      console.log(
        `Database connected successfully and app listening on port ${port}`
      )
    );
  })
  .catch((error) => {
    console.log(error.message);
  });