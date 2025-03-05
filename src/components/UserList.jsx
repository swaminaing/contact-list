import React from "react";
import UserInfo from "./UserInfo";

function UserList({ users, onDelete }) {
  return (
    <>
      {users.map((user, index) => {
        return (
          <UserInfo
            key={index}
            username={user.name.first}
            age={user.dob.age}
            imgUrl={user.picture.medium}
            email={user.email}
            country={user.location.country}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
}

export default UserList;
