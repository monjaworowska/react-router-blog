import React from "react";
import { Link, useRouteError } from "react-router-dom";

const HomeErrors = () => {
  const error = useRouteError();
  return (
    <div>
      {error.message} <br />
      <Link to="posts">Posts</Link>
    </div>
  );
};

export default HomeErrors;
