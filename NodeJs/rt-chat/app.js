const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.use(express.static("client"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

console.log("Server started");

/// SocketIO
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("sendMsgToServer", (msg) => {
    io.emit("addToChat", msg);
  });

  socket.on("disconnect", (socket) => {
    console.log("User disconnected");
  });
});

server.listen(4141);
