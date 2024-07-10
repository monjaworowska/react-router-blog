import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex flex-col gap-5 text-2xl md:flex-row md:justify-flex-end md:items-center">
      <h1 className="text-4xl md:mr-auto">
        <NavLink to="/">Blog</NavLink>
      </h1>
      <NavLink to="posts">Posts</NavLink>
      <NavLink to="users">Users</NavLink>
      <NavLink to="about">About</NavLink>
    </nav>
  );
};

export default Nav;
