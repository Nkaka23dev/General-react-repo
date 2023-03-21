import React from "react";
import Help from "../pages/Help";
import { Outlet } from "react-router";

export default function HelperLayout() {
  return (
    <>
      <div>
        <Help />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
