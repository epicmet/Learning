const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByTweetId = {};

app.get("/tweets/:id/comments", (req, res) => {
  res.send(commentsByTweetId[req.params.id] || []);
});

app.post("/tweets/:id/comments", async (req, res) => {
  const { id: postId } = req.params;
  const { content } = req.body;

  const commentId = randomBytes(4).toString("hex");

  const comments = commentsByTweetId[postId] || [];
  comments.push({ id: commentId, content });

  commentsByTweetId[postId] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: { id: commentId, content, postId },
  });

  res.status(201).send(comments);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  console.log("recived event", { type, data });

  res.send({});
});

app.listen(4001, () => {
  console.log("listening on 4001");
});
