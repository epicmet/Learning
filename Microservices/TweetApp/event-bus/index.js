const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios
    .post("http://localhost:4000/events", event)
    .catch((e) => console.log(e));
  axios
    .post("http://localhost:4001/events", event)
    .catch((e) => console.log(e));
  axios
    .post("http://localhost:4002/events", event)
    .catch((e) => console.log(e));

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
