import React, { useEffect, useState } from "react";
import { getUsers } from "./utils/http";
import UserList from "./components/UserList";
import UserInfo from "./components/UserInfo";
import AllUser from "./components/AllUser";

const mainStyles =
  "bg-gradient-to-r from-white to-gray-200 text-blue-900 min-h-screen p-4";

function App() {
  const [users, setUsers] = useState([]);
  const [isView, setIsView] = useState(false);
  const [someUsers, setSomeUsers] = useState([]);

  useEffect(() => {
    async function getSomeUser() {
      const data = await getUsers();

      setSomeUsers(data.results.splice(0, 10));
    }

    async function getAllUser() {
      const data = await getUsers();
      setUsers(data);
    }

    getSomeUser();
  }, []);

  function handleDeleteUser(email) {
    setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
  }

  return (
    <main className={mainStyles}>
      <h1 className="text-3xl text-center font-bold">My Contact List</h1>

      <div className="container mx-auto p-4 max-w-screen-sm">
        {isView === true ? (
          <AllUser users={users} onDelete={handleDeleteUser} />
        ) : (
          <UserList users={someUsers} onDelete={handleDeleteUser} />
        )}
        <button
          onClick={() => setIsView(!isView)}
          className="w-full hover:bg-blue-400 bg-blue-300 p-3 rounded-md"
        >
          View All Users
        </button>
      </div>
    </main>
  );
}

export default App;
