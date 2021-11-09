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
const { idGenerator } = require("./utils");

const SOCKET_LIST = {};

const { Server } = require("socket.io");
const io = new Server(server);

io.sockets.on("connection", (socket) => {
  console.log("New user joined");
  const newId = idGenerator();
  SOCKET_LIST[newId] = socket;

  socket.on("sendMsgToServer", (data) => {
    console.log("someone send a message");

    for (const key in SOCKET_LIST) {
      SOCKET_LIST[key].emit("addToChat", data);
    }
  });

  socket.on("disconnect", (socket) => {
    delete SOCKET_LIST[socket.id];
  });
});

server.listen(4141);
