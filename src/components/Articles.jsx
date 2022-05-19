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
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
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
      <div className="flex flex-col justify-center text-center lg:w-1/2 lg:m-auto px-5">
        <h1>{err}</h1>
        <ReturnHomeButton />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center text-center lg:w-1/2 lg:m-auto px-5">
        <h1>Loading articles...</h1>
      </div>
    );
  }

  return (
    <ul className="flex flex-col justify-center">
      <div className="sticky top-24 lg:w-1/2 lg:self-center px-5">
        <SortSelect setSelectedOption={setSelectedOption} />
      </div>
      {articleList.map((article) => {
        return (
          <li
            key={article.article_id}
            className="text-center text-black p-5 m-3 lg:w-1/2 lg:self-center bg-cadet-grey border-2 shadow-md rounded-lg border-umber text-bg-sonic-silver hover:bg-roman-silver hover:text-white hover:shadow-2xl"
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
