import React, { useState, useEffect } from "react";
import CommentCreate from "./CommentCreate";
import axios from "axios";
import CommentList from "./CommentList";

const TweetList = () => {
  const [tweets, setTweets] = useState({});

  const fetchTweets = async () => {
    const res = await axios.get("http://localhost:4000/tweets");
    setTweets(res.data);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {Object.values(tweets).map((tweet) => {
        return (
          <div
            className="card"
            style={{ width: "30%", marginBottom: "20px" }}
            key={tweet.id}
          >
            <div className="card-body">
              <h3>{tweet.title}</h3>
              <CommentList postId={tweet.id} />
              <CommentCreate postId={tweet.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TweetList;
