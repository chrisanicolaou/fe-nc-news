import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReq } from "../utils/api";

const Navbar = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const asyncEffect = async () => {
      const result = await getReq("/topics");
      setTopics(result);
    };
    asyncEffect();
  }, []);
  return (
    <nav className="text-center">
      {topics.map((topic) => {
        return (
          <Link to={`/topics/${topic.slug}`} key={topic.slug} className="p-2">
            {topic.slug}
          </Link>
        );
      })}
      <Link to="/users" className="p-2">
        Users
      </Link>
    </nav>
  );
};

export default Navbar;
