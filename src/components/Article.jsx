import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReq } from "../utils/api";
import Comment from "./Comment";
import LikeButton from "./LikeButton";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const asyncEffect = async () => {
      try {
        const articleFromApi = await getReq(`/articles/${article_id}`);
        setArticle(articleFromApi.article);
        if (articleFromApi.article.comment_count > 0) {
          const commentsFromApi = await getReq(
            `/articles/${article_id}/comments`
          );
          console.log(commentsFromApi.comments);
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
        <LikeButton article={article} />
      </div>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>{comment.author}</p>
              <p>{comment.votes}</p>
            </li>
          );
        })}
      </ul>
      <Comment article={article} />
    </article>
  );
};

export default Article;
