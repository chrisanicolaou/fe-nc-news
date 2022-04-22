import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReq } from "../utils/api";
import SortSelect from "./SortSelect";
import ReturnHomeButton from "./ReturnHomeButton";

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
        setErr(null);
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
        setArticleList(result.articles);
      } catch (err) {
        setErr(
          "400 - Articles don't exist! There may be nothing written about this topic yet. Please don't be upset :/"
        );
      }
    };
    asyncEffect();
  }, [topic_name, selectedOption]);

  if (err) {
    return (
      <div className="flex flex-col justify-center text-center">
        <h1>{err}</h1>
        <ReturnHomeButton />
      </div>
    );
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
