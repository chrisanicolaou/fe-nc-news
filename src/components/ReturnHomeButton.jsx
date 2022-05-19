import { Link } from "react-router-dom";

const ReturnHomeButton = () => {
  return (
    <Link
      to="/"
      className="border-2 bg-cyan-100 hover:bg-cyan-200 text-black rounded-lg"
    >
      Return Home
    </Link>
  );
};

export default ReturnHomeButton;
