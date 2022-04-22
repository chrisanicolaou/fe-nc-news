import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/" className="text-center">
      <h1 className=" sticky top-0 bg-umber text-white">NC-News</h1>
    </Link>
  );
};

export default Header;
