const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByTweetId = {};

app.get("/tweets/:id/comments", (req, res) => {
  res.send(commentsByTweetId[req.params.id] || []);
});

app.post("/tweets/:id/comments", (req, res) => {
  const { id: postId } = req.params;
  const { content } = req.body;

  const commentId = randomBytes(4).toString("hex");

  const comments = commentsByTweetId[postId] || [];
  comments.push({ id: commentId, content });

  commentsByTweetId[postId] = comments;

  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log("listening on 4001");
});
