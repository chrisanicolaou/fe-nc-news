import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReq } from "../utils/api";

const Articles = () => {
  const [articleList, setArticleList] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const asyncEffect = async () => {
      try {
        const result = await getReq("/articles");
        setArticleList(result);
        console.log(result);
      } catch (err) {
        setErr("404 - Articles not found!");
      }
    };
    asyncEffect();
  }, []);

  if (err) {
    return <p>{err}</p>;
  }

  return (
    <ul className="flex flex-col justify-center">
      {articleList.map((article) => {
        return (
          <Link to={`/articles/${article.article_id}`}>
            <li
              key={article.article_id}
              className="border-2 text-center hover:bg-cyan-300"
            >
              <h3>{article.title}</h3>
              <p>{article.author}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Articles;
