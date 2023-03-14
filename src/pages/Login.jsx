import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store";

export default function Login() {
  const [newUsername, setNewUsername] = useState("");

  const username = useSelector((state) => state.user.value.username);

  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="text-4xl text-center text-white bg-green-800">
        The name is: <span className="text-gray-300">{username}</span>
      </div>
      <div className="max-w-2xl mx-auto">
        <input
          onChange={(e) => setNewUsername(e.target.value)}
          type="text"
          placeholder="Enter your name here...."
          className="w-full p-2 border border-gray-500"
        />
        <button
          onClick={() => dispatch(login({ username: newUsername }))}
          className="w-full bg-green-500 text-white p-4 hover:bg-green-600"
        >
          Submit Login
        </button>
        <button
        onClick={() => dispatch(logout())}
         className="w-full mt-6 bg-red-500 text-white p-4 hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
}
