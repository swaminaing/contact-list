import React, { useEffect, useState } from "react";
import { getUsers } from "./utils/http";
import UserList from "./components/UserList";

const mainStyles =
  "bg-gradient-to-r from-white to-gray-200 text-blue-900 min-h-screen p-4";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUser() {
      const data = await getUsers();

      setUsers(data.results);
    }

    getUser();
  }, []);

  return (
    <main className={mainStyles}>
      <h1 className="text-3xl text-center font-bold">My Contact List</h1>

      <div className="container mx-auto p-4 max-w-screen-sm">
        <UserList users={users} />
      </div>
    </main>
  );
}

export default App;
