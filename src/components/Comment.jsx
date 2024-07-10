import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="bg-red-100 text-black p-4 w-full">
      <p className="text-2xl font-bold">
        <span className="capitalize">{comment.name.substr(0, 1)}</span>
        {comment.name.substr(1)}
      </p>
      <p className="indent-4 text-xl">
        <span className="capitalize">{comment.body.substr(0, 1)}</span>
        {comment.body.substr(1)}
      </p>
      <p>
        Author:<span className="font-bold"> {comment.email}</span>
      </p>
    </div>
  );
};

export default Comment;
