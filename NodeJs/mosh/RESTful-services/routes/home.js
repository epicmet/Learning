const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("index", { title: "My Express App", message: "Welcome" });
});

module.exports = route;
