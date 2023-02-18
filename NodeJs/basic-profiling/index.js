const crypto = require("crypto");
const express = require("express");

const users = {};

const app = express();

app.use(express.json());

app.post("/newUser", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .send("Please provide username and password on the body of the request");
  }

  if (users[username]) {
    return res.status(409).send("User already exists");
  }

  const salt = crypto.randomBytes(128).toString("base64");
  const hashed = crypto.pbkdf2Sync(password, salt, 1000, 512, "sha512");

  users[username] = { salt, hashed };

  res.status(200).send("User made successfully");
});

app.post("/auth", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .send("Please provide username and password on the body of the request");
  }

  if (!users[username]) {
    return res.status(404).send("User not found");
  }

  const { salt, hashed } = users[username];
  const encryptedPassword = crypto.pbkdf2Sync(
    password,
    salt,
    1000,
    512,
    "sha512"
  );

  if (!crypto.timingSafeEqual(encryptedPassword, hashed)) {
    return res.status(400).send("Password is incorrect");
  }

  return res.status(200).send("Login successfully");
});

app.get("/users", (_req, res) => {
  return res.status(200).send(JSON.stringify(Object.keys(users)));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
