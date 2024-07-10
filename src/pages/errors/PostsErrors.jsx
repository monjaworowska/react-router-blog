import React from "react";
import { Link, useRouteError } from "react-router-dom";

const PostsError = () => {
  const error = useRouteError();
  return (
    <div>
      {error.message} <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default PostsError;
