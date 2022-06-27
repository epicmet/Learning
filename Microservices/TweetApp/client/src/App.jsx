import React from "react";
import TweetCreate from "./TweetCreate";
import TweetList from "./TweetList";

const App = () => {
  return (
    <div className="container">
      <h1>Create a tweet</h1>
      <TweetCreate />
      <hr />
      <h1>Tweets</h1>
      <TweetList />
    </div>
  );
};

export default App;
