const express = require("express");

const app = express.Router();

app.get("/random-config", (req, res) => {
  res.json({
    toto: 123,
    titi: "coucou",
  });
});

module.exports = app;
