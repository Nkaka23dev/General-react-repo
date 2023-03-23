import React from "react";
import Careers from "../pages/Careers";
import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <>
      <div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
