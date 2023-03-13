import React, { useContext } from "react";
import { AppContext } from "../App";
import ChangeUserName from "../components/ChangeUserName";

export default function Profile() {
  const {userName} = useContext(AppContext);
  return (
    <div className=" text-center  bg-green-800">
      <h1 className="text-4xl text-white">
        Profile Page is here and Username is Here: {userName}
      </h1>
      <ChangeUserName/>
    </div>
  );
}
