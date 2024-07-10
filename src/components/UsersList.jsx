import UserPrev from "./UserPrev";

const UsersList = ({ users }) => {
  return (
    <div className="flex flex-col gap-5 my-6 justify-center w-full md:flex-row md:flex-wrap">
      {users.map((user) => (
        <UserPrev key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
