import React from "react";

const CommentList = ({ comments }) => {
  return (
    <ul className="d-flex flex-row flex-wrap justify-content-between">
      {comments.map((comment) => {
        return <li key={comment.id}>{comment.content}</li>;
      })}
    </ul>
  );
};

export default CommentList;
