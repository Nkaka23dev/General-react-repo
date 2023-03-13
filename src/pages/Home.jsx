import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Home() {
  const {userName} = useContext(AppContext);
  return (
    <div className="text-4xl text-center text-white bg-gray-800">
      <h1>This is the Home page and username is {userName}</h1>
    </div>
  );
}
