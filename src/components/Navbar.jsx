import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getReq } from "../utils/api";

const Navbar = () => {
  const [topics, setTopics] = useState([]);
  let location = useLocation();
  let currentTopic = location.pathname.replace("/topics/", "");
  useEffect(() => {
    const asyncEffect = async () => {
      const result = await getReq("/topics");
      setTopics(result.topics);
    };
    asyncEffect();
  }, []);
  return (
    <nav className="text-center flex flex-row justify-center bg-black lg:w-1/2 lg:m-auto px-5">
      {topics.map((topic) => {
        return (
          <Link
            to={`/topics/${topic.slug}`}
            key={topic.slug}
            className={
              topic.slug !== currentTopic
                ? "p-2 grow bg-black text-white hover:bg-cadet-grey hover:text-black rounded-md"
                : "p-2 grow bg-roman-silver text-black rounded-md"
            }
          >
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
