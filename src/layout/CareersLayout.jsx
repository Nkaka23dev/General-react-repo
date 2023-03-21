import React from "react";
import { Outlet } from "react-router";
import Careers from "../pages/careers/Careers";

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
