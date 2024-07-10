import { useLoaderData } from "react-router-dom";
import PostsList from "../components/PostsList";

const UserPosts = () => {
  const data = useLoaderData();
  const { user, posts } = data;
  const username = user.name.split(" ")[0];
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl my-4">{username}'s posts</p>
      <p>{user.email}</p>
      <PostsList posts={posts} />
    </div>
  );
};

export default UserPosts;

export const userPostsLoader = async ({ params }) => {
  const { id } = params;
  const resUser = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!resUser.ok) {
    throw Error("could not fetch user data");
  }
  const user = await resUser.json();
  const resPosts = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`
  );
  if (!resPosts.ok) {
    throw Error("Could not fetch user's posts");
  }
  const posts = await resPosts.json();
  const data = { user, posts };
  return data;
};
