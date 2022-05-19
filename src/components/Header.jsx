import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/" className="text-center">
      <h1 className="text-white font-semibold text-4xl bg-black pt-3">
        NC-News
      </h1>
    </Link>
  );
};

export default Header;
