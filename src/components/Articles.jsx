import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReq } from "../utils/api";

const Articles = () => {
  const { topic_name } = useParams();
  const [articleList, setArticleList] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const asyncEffect = async () => {
      try {
        const result = await getReq("/articles");
        if (topic_name) {
          setArticleList(() => {
            return result.filter((article) => article.topic === topic_name);
          });
        } else {
          setArticleList(result);
        }
      } catch (err) {
        setErr("404 - Articles not found!");
      }
    };
    asyncEffect();
  }, [topic_name]);

  if (err) {
    return <p>{err}</p>;
  }

  return (
    <ul className="flex flex-col justify-center">
      {articleList.map((article) => {
        return (
          <li
            key={article.article_id}
            className="border-2 text-center hover:bg-cyan-300"
          >
            <Link to={`/articles/${article.article_id}`}>
              <h3>{article.title}</h3>
              <p>{article.author}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
