import React from "react";
import UserInfo from "./UserInfo";

function UserList({ users }) {
  return (
    <>
      {users.map((user, index) => {
        return (
          <UserInfo
            index={index}
            username={user.name.first}
            imgUrl={user.picture.medium}
            email={user.email}
          />
        );
      })}
    </>
  );
}

export default UserList;
