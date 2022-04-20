import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReq } from "../utils/api";

const Navbar = () => {
  const [topics, setTopics] = useState([
    {
      slug: "coding",
    },
    {
      slug: "football",
    },
    {
      slug: "cooking",
    },
  ]);
  useEffect(() => {});
  return (
    <nav className="text-center">
      <Link to="/topics/:topic_id">Topic #1</Link>
      <Link to="/topics/:topic_id">Topic #2</Link>
      <Link to="/topics/:topic_id">Topic #3</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Navbar;
