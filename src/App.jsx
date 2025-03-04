import React, { useEffect, useState } from "react";
import { getUsers } from "./utils/http";

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
        {users.map((user, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 my-3 flex flex-col sm:flex-row items-center"
            >
              <div className="mr-4 mb-4 sm:mb-0">
                <img
                  className="rounded-full w-24 h-24"
                  src={user.picture.medium}
                  alt=""
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold">{user.name.first}</h3>
                <p className="text-gray-700">{user.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
