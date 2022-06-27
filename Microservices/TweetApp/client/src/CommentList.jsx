import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/tweets/${postId}/comments`
    );
    setComments(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <ul className="d-flex flex-row flex-wrap justify-content-between">
      {comments.map((comment) => {
        return <li key={comment.id}>{comment.content}</li>;
      })}
    </ul>
  );
};

export default CommentList;
