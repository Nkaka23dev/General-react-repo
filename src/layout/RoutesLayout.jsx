import React from "react";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";
import Navbar from "./Navbar";

export default function RoutesLayout() {
  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <main>
        <Outlet />
      </main>
    </>
  );
}
