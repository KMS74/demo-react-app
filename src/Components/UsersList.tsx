import { User } from "../types/users.type";

const UsersList = () => {
  const users: User[] = [
    {
      id: 1,
      name: "John",
      role: "Admin",
    },
    {
      id: 2,
      name: "Bob",
      role: "User",
    },
    {
      id: 3,
      name: "Sara",
      role: "User",
    },
    {
      id: 4,
      name: "Mike",
      role: "Admin",
    },
    {
      id: 5,
      name: "Karem",
      role: "User",
    },
  ];
  return (
    <div>
      <h2>Users List</h2>

      {/* if there are no users, display a message */}
      {/* Conditional rendering */}
      {!users.length && <p>No users found</p>}

      {/* if there are users, display them */}
      {/* List rendering */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} -{" "}
            {user.role === "Admin"
              ? "Authorized for all actions"
              : "Has limited access"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
