import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getReq } from "../utils/api";

const Navbar = () => {
  const [topics, setTopics] = useState([]);
  let location = useLocation();
  let currentTopic = location.pathname.replace("/topics/", "");
  console.log(currentTopic);
  useEffect(() => {
    const asyncEffect = async () => {
      const result = await getReq("/topics");
      setTopics(result.topics);
    };
    asyncEffect();
  }, []);
  return (
    <nav className="text-center flex flex-row justify-evenly bg-cadet-grey">
      {topics.map((topic) => {
        return (
          <Link
            to={`/topics/${topic.slug}`}
            key={topic.slug}
            className={
              topic.slug !== currentTopic
                ? "p-2 grow bg-cadet-grey hover:bg-umber hover:text-white"
                : "p-2 grow bg-roman-silver text-white"
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
