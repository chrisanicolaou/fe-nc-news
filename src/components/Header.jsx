import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/" className="text-center">
      <h1 className="bg-cadet-grey text-black font-semibold text-4xl">
        NC-News
      </h1>
    </Link>
  );
};

export default Header;
