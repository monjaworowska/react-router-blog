import { NavLink, Outlet } from "react-router-dom";

const PostsLayout = () => {
  return (
    <div>
      <p className="my-2 indent-2.5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
        euismod erat. Etiam erat nisi, rhoncus at lobortis non, scelerisque nec
        ante. Mauris a dui laoreet justo accumsan dignissim. Curabitur consequat
        libero sapien, aliquet viverra magna consectetur sit amet. Integer vitae
        massa vitae nisl eleifend ultricies ut quis enim.
      </p>
      {/*<button className="my-2 p-2 uppercase bg-slate-500">
        <NavLink to="/">Add new post</NavLink>
      </button>*/}
      <Outlet />
    </div>
  );
};

export default PostsLayout;
