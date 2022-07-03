const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const tweets = {};

app.get("/tweets", (_, res) => {
  res.send(tweets);
});

app.post("/tweets", async (req, res) => {
  const id = randomBytes(4).toString("hex");

  const { title } = req.body;

  tweets[id] = { id, title };

  await axios.post("http://event-bus-srv:4005/events", {
    type: "TweetCreated",
    data: { id, title },
  });

  res.status(201).send(tweets[id]);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  console.log("recived event", { type, data });

  res.send({});
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
