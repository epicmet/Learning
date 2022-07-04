import React, { useState } from "react";
import axios from "axios";

const TweetCreate = () => {
  const [tweet, setTweet] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    await axios.post("http://tweets-app.com/tweets/create", { title: tweet });

    setTweet("");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default TweetCreate;
