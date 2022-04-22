import { useLocation } from "react-router-dom";
import ReturnHomeButton from "./ReturnHomeButton";

const NotFound = () => {
  let location = useLocation();
  return (
    <div className="flex flex-col justify-center text-center">
      <h1>404 - Page {location.pathname} not found! We're sorry :(</h1>
      <ReturnHomeButton />
    </div>
  );
};

export default NotFound;
