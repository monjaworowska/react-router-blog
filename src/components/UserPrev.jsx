import { Link, useLocation } from "react-router-dom";

const UserPrev = ({ user }) => {
  const location = useLocation();
  const name = user.name.split(" ")[0];
  return (
    <div className="bg-slate-300 text-black odd:bg-slate-200 p-4 hover:bg-orange-200 md:w-1/3">
      <p className="text-2xl font-bold">{user.name}</p>
      <Link to={`/users/${user.id}/posts`} className="underline">
        {name}'s posts...
      </Link>
    </div>
  );
};

export default UserPrev;
