import { useState } from "react";

const Comment = ({ article }) => {
  const [username, setUsername] = useState("Xx_c0d3m45t3r_xX");
  const [newCommentToPost, setNewCommentToPost] = useState("");
  return <h1>Post Comment Logic</h1>;
};

export default Comment;
