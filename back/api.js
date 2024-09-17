const express = require("express");
const { random } = require("./utils");

const app = express.Router();

app.get("/random-config", (req, res) => {
  res.json({
    samples: random(0, 500),
    multiplicationFactor: random(0, 100, 2),
  });
});

module.exports = app;
