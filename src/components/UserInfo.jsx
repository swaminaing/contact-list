import React from "react";

function UserInfo({ username, age, imgUrl, email, country, onDelete }) {
  return (
    <div className="bg-blue-100 shadow-md rounded-lg p-4 my-3 flex flex-col sm:flex-row items-center">
      <div className="mr-4 mb-4 sm:mb-0">
        <img className="rounded-full w-24 h-24" src={imgUrl} alt="" />
      </div>
      <div className="text-center sm:text-left">
        <span>
          <span className="text-xl font-semibold">{username}, </span>
          <span className="text-sm font-semibold">{age}</span>
        </span>
        <p className="text-blue-900 font-semibold">{country}</p>
        <p className="text-gray-700">{email}</p>

        <button
          onClick={() => onDelete(email)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-1 mt-3 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
