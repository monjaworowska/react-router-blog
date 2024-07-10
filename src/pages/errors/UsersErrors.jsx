import { Link, useRouteError } from "react-router-dom";

const UsersErrors = () => {
  const error = useRouteError();
  return (
    <div>
      {error.message} <br /> <Link to="/">Home</Link>
    </div>
  );
};

export default UsersErrors;
