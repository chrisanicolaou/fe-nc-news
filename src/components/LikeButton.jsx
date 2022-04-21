import { useEffect, useState } from "react";
import { patchReq } from "../utils/api";

const LikeButton = ({ article, comment }) => {
  const [currentVotes, setCurrentVotes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [path, setPath] = useState("");

  useEffect(() => {
    if (!article) {
      setPath(`/comments/${comment.comment_id}`);
      setCurrentVotes(comment.votes);
    } else {
      setPath(`/articles/${article.article_id}`);
      setCurrentVotes(article.votes);
    }
  }, [article.votes, comment.votes, comment.comment_id, article]);

  const clickHandler = async () => {
    try {
      const increment = isLiked ? -1 : 1;
      setCurrentVotes(currentVotes + increment);
      setIsLiked(!isLiked);
      await patchReq(path, {
        inc_votes: increment,
      });
    } catch (err) {}
  };

  return (
    <div className="flex flex-row justify-center space-x-4">
      <button
        className="border-2 rounded-md border-black bg-cyan-600 px-2 hover:bg-cyan-800"
        onClick={clickHandler}
      >
        {isLiked ? "Unlike" : "Like"}
      </button>
      <p>{currentVotes}</p>
    </div>
  );
};

export default LikeButton;
