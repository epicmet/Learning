const crypto = require("crypto");

const start = Date.now();
crypto.pbkdf2("a", "b", 100_000, 512, "sha512", () => {
  console.log("1:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100_000, 512, "sha512", () => {
  console.log("2:", Date.now() - start);
})

crypto.pbkdf2("a", "b", 100_000, 512, "sha512", () => {
  console.log("3:", Date.now() - start);
})

crypto.pbkdf2("a", "b", 100_000, 512, "sha512", () => {
  console.log("4:", Date.now() - start);
})

// This call would take more than 4 above! Because libuv`s thread pool has 4 threads.
crypto.pbkdf2("a", "b", 100_000, 512, "sha512", () => {
  console.log("5:", Date.now() - start);
})
