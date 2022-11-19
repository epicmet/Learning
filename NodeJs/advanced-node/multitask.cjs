process.env.UV_THREADPOOL_SIZE = 4;
const https = require("https");
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();

let finish = false;

function doReq() {
  https
    .request("https://www.google.com", (res) => {
      console.log('finish', finish);

      res.on("data", () => { });

      res.on("end", () => {
        console.log("HTTPS:", Date.now() - start);
        finish = true;
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("HASH:", Date.now() - start);
  });
}

//////

doReq();
doReq();

fs.readFile("multitask.cjs", "utf8", () => {
  console.log("FS:", Date.now() - start);
});

// fs.readFile("/Users/kianmacbook/Downloads/card2card.pdf", "utf8", () => {
//   console.log("FS:", Date.now() - start);
// });

doHash();
doHash();
doHash();
doHash();
