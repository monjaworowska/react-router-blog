import { Link, useLoaderData } from "react-router-dom";
import PostsList from "../components/PostsList";
import UsersList from "../components/UsersList";

const Home = () => {
  const data = useLoaderData();
  const { posts, users } = data;
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-2xl">Latest posts</p>
        <PostsList posts={posts} />
        <Link to="posts">More..</Link>
      </div>
      <div className="flex flex-col items-center mt-4">
        <p className="text-2xl">New users</p>
        <UsersList users={users} />
        <Link to="users">More..</Link>
      </div>
    </>
  );
};

export default Home;

export const homePageDataLoader = async () => {
  const resPosts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  if (!resPosts.ok) {
    throw Error("Could not fetch posts");
  }
  const posts = await resPosts.json();
  const resUsers = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=3"
  );
  if (!resUsers.ok) {
    throw Error("Could not fetch users");
  }
  const users = await resUsers.json();
  const data = { posts, users };
  return data;
};
