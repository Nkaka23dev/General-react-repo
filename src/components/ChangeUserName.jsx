import React, { useContext, useState } from "react";
import { AppContext } from "../App";

export default function ChangeUserName() {
  const [userInput, setUserInput] = useState();
  const { setUsername } = useContext(AppContext);
  
  const handleClick = () => {
    setUsername(userInput);
  };
  return (
    <div className="max-w-xl mx-auto">
      <input
        type="text"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        placeholder="Enter a username..."
        className="w-full p-3"
      />
      <button
        onClick={handleClick}
        className="w-full p-4 text-white mt-8 bg-red-500 hover:bg-red-600"
      >
        Change Username
      </button>
    </div>
  );
}
