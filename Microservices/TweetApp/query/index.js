const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const tweets = {};

app.get("/tweets", (_, res) => {
  res.send(tweets);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  console.log("event received", { type, data });

  if (type === "TweetCreated") {
    const { id, title } = data;

    tweets[id] = { id, title, comments: [] };
  } else if (type === "CommentCreated") {
    const { id, content, postId } = data;

    const tweet = tweets[postId];

    tweet.comments.push({ id, content });
  }

  console.log(tweets);
  res.send({});
});

app.listen(4002, () => {
  console.log("listening on 4002");
});
