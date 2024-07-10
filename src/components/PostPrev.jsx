import { Link, useLocation } from "react-router-dom";

const PostPrev = ({ post }) => {
  const location = useLocation();
  return (
    <>
      <div className="bg-slate-300 text-black odd:bg-slate-200 p-4 hover:bg-orange-200 md:w-1/4">
        <p className="text-2xl font-bold">
          <span className="capitalize">{post.title.substr(0, 1)}</span>
          {post.title.length > 20
            ? post.title.substr(1, 20) + "..."
            : post.title.substr(1)}
        </p>
        <p className="italic indent-4">
          <span className="capitalize">{post.body.substr(0, 1)}</span>
          {post.body.length > 20
            ? post.body.substr(1, 100) + "... "
            : post.body.substr(1)}
          <Link
            to={`/posts/${post.id}`}
            className="underline not-italic font-bold"
          >
            Read more
          </Link>
        </p>
      </div>
    </>
  );
};

export default PostPrev;
