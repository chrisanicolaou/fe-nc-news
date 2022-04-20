import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReq } from "../utils/api";
import Comment from "./Comment";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const asyncEffect = async () => {
      try {
        const result = await getReq(`/articles/${article_id}`);
        setArticle(result);
        console.log(result);
      } catch (err) {
        setErr(
          "404 - We don't know where your article is! Please try again :)"
        );
      }
    };
    asyncEffect();
  }, []);

  if (err) {
    return <p>{err}</p>;
  }

  return (
    <article className="text-center">
      <h1>Individual Article {article_id} Logic</h1>
      <Comment />
    </article>
  );
};

export default Article;
