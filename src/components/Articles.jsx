import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReq } from "../utils/api";
import SortSelect from "./SortSelect";

const Articles = () => {
  const { topic_name } = useParams();
  const [articleList, setArticleList] = useState([]);
  const [err, setErr] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const asyncEffect = async () => {
      try {
        let path = "/articles";
        let queries = "";
        if (topic_name) {
          queries += `?topic=${topic_name}`;
        }
        if (selectedOption) {
          if (queries) {
            queries += `&${selectedOption}`;
          } else {
            queries += `?${selectedOption}`;
          }
        }
        path += queries;
        const result = await getReq(path);
        console.log(result.articles);
        setArticleList(result.articles);
      } catch (err) {
        setErr("404 - Articles not found!");
      }
    };
    asyncEffect();
  }, [topic_name, selectedOption]);

  if (err) {
    return <p>{err}</p>;
  }

  return (
    <ul className="flex flex-col justify-center">
      <SortSelect setSelectedOption={setSelectedOption} />
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
