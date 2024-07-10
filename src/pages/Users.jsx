import { useLoaderData } from "react-router-dom";
import UsersList from "../components/UsersList";

const Users = () => {
  const users = useLoaderData();
  return <UsersList users={users} />;
};

export default Users;

export const usersLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw Error("Could not fetch users");
  }
  const users = await res.json();
  return users;
};
