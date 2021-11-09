const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.use("/client", express.static(__dirname, "/client"));

app.get("/", (req, res) => {
  res.sendFile(__dirname, "/client/index.html");
});

console.log("Server started");
