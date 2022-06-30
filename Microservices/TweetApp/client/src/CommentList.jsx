import React from "react";

const CommentList = ({ comments }) => {
  return (
    <ul className="d-flex flex-row flex-wrap justify-content-between">
      {comments.map((comment) => {
        const { status } = comment;

        let content;

        if (status === "approved") {
          content = comment.content;
        } else if (status === "pending") {
          content = "This comment is awaiting moderation";
        } else if (status === "rejected") {
          content = "This comment has been rejected";
        }

        return <li key={comment.id}>{content}</li>;
      })}
    </ul>
  );
};

export default CommentList;
