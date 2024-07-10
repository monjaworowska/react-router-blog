import { Link, useLoaderData } from "react-router-dom";
import CommentsList from "../components/CommentsList";

const Post = () => {
  const data = useLoaderData();
  const { post, author, comments } = data;
  return (
    <>
      <div className="bg-slate-300 text-black p-4">
        <p className="text-2xl font-bold">
          <span className="capitalize">{post.title.substr(0, 1)}</span>
          {post.title.substr(1)}
        </p>
        <p className="indent-4 text-xl">
          <span className="capitalize">{post.body.substr(0, 1)}</span>
          {post.body.substr(1)}
        </p>
        <p>
          Author:{" "}
          <Link
            to={`/users/${author.id}/posts`}
            className="underline font-bold"
          >
            {author.name}
          </Link>
        </p>
      </div>
      <div>
        <p className="text-xl my-4">Comments</p>
        <CommentsList comments={comments} />
      </div>
    </>
  );
};

export default Post;

export const postLoader = async ({ params }) => {
  const { id } = params;
  const resPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/`
  );
  if (!resPost.ok) {
    throw Error("Could not find post");
  }
  const post = await resPost.json();
  const resAuthor = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  );
  if (!resAuthor.ok) {
    throw Error("Could not find author of the post");
  }
  const author = await resAuthor.json();
  const resComments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  if (!resComments.ok) {
    throw Error("Could not fetch the posts's comments");
  }
  const comments = await resComments.json();
  const data = { post, author, comments };
  return data;
};
