const os = require("os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory / 1e9}`);
console.log(`Free Memory: ${freeMemory / 1e9}`);

const fs = require("fs");

fs.readdir("./", (err, files) => {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});

const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("message");
