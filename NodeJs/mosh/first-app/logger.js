const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    // Req to url
    console.log(message);

    this.emit("messageLogged", { id: 1, message: "hey buddy" });
  }
}

const url = "http://randomurl.io";

module.exports = Logger;
