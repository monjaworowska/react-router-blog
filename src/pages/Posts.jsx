import { useLoaderData } from "react-router-dom";
import PostsList from "../components/PostsList";

const Posts = () => {
  const posts = useLoaderData();
  return <PostsList posts={posts} />;
};

export default Posts;

export const postsLoader = async ({ limit }) => {
  const API_URL = limit
    ? `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    : "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw Error("Could not fetch posts");
  }
  const posts = await res.json();
  return posts;
};
