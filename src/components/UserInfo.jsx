import React from "react";

function UserInfo({ index, username, imgUrl, email }) {
  return (
    <div
      key={index}
      className="bg-white shadow-md rounded-lg p-4 my-3 flex flex-col sm:flex-row items-center"
    >
      <div className="mr-4 mb-4 sm:mb-0">
        <img className="rounded-full w-24 h-24" src={imgUrl} alt="" />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-xl font-semibold">{username}</h3>
        <p className="text-gray-700">{email}</p>
      </div>
    </div>
  );
}

export default UserInfo;
