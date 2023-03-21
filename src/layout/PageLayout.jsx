import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function PageLayout() {
  return (
    <section>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </section>
  );
}
