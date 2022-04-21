import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReq, postReq } from "../utils/api";
import LikeButton from "./LikeButton";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(null);
  const [username, setUsername] = useState("jessjelly");
  const [newCommentToPost, setNewCommentToPost] = useState("");
  const [isReadyToSend, setIsReadyToSend] = useState(true);

  useEffect(() => {
    const asyncEffect = async () => {
      try {
        const articleFromApi = await getReq(`/articles/${article_id}`);
        setArticle(articleFromApi.article);
        if (articleFromApi.article.comment_count > 0) {
          const commentsFromApi = await getReq(
            `/articles/${article_id}/comments`
          );
          setComments(commentsFromApi.comments);
        }
      } catch (err) {
        setErr(
          "404 - We don't know where your article is! Please try again :)"
        );
      }
    };
    asyncEffect();
  }, [article_id]);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(comments);
      if (newCommentToPost !== "" && isReadyToSend) {
        setIsReadyToSend(false);
        setComments((currentComments) => {
          return [
            ...currentComments,
            {
              body: newCommentToPost,
              author: username,
              votes: 0,
              comment_id: `new_${(Math.random() * 100).toString()}`,
            },
          ];
        });
        await postReq(`/articles/${article_id}/comments`, {
          body: newCommentToPost,
          username: username,
        });
        setNewCommentToPost("");
        setIsReadyToSend(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (err) {
    return <p>{err}</p>;
  }

  return (
    <article className="text-center">
      <div className="text-white bg-slate-700 p-2">
        <h1>{article.title}</h1>
        <h3>{article.author}</h3>
        <br></br>
        <p>{article.body}</p>
        <br></br>
        <LikeButton article={article} comment={""} />
      </div>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>{comment.author}</p>
              <LikeButton comment={comment} article={""} />
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="comment-body">
          Post a comment below! {300 - newCommentToPost.length}
        </label>
        <textarea
          name="comment-body"
          maxLength="300"
          value={newCommentToPost}
          onChange={(event) => {
            setNewCommentToPost(event.target.value);
          }}
        ></textarea>
        <button>Submit</button>
      </form>
    </article>
  );
};

export default Article;
