import PostPrev from "./PostPrev";

const PostsList = ({ posts }) => {
  return (
    <div className="flex flex-col gap-5 my-6 justify-center md:flex-row md:flex-wrap">
      {posts.map((post) => (
        <PostPrev key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
