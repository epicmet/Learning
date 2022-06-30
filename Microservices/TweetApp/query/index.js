const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const tweets = {};

function handleEvent(type, data) {
  if (type === "TweetCreated") {
    const { id, title } = data;

    tweets[id] = { id, title, comments: [] };
  } else if (type === "CommentCreated") {
    const { id, content, postId, status } = data;

    const tweet = tweets[postId];

    tweet.comments.push({ id, content, status });
  } else if (type === "CommentUpdated") {
    const { id, postId, content, status } = data;

    const comment = tweets[postId].comments.find((t) => t.id === id);

    comment.status = status;
    comment.content = content;
  }
}

app.get("/tweets", (_, res) => {
  res.send(tweets);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  res.send({});
});

app.listen(4002, async () => {
  console.log("listening on 4002");

  try {
    const res = await axios.get("http://localhost:4005/events");

    for (let event of res.data) {
      console.log("processing event", event.type);

      handleEvent(event.type, event.data);
    }
  } catch (e) {
    console.log(e);
  }
});
