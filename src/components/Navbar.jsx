import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="shadow-xl">
      <div className="max-w-7xl mx-auto py-3 flex cursor-pointer justify-between items-center ">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <div className="flex items-center gap-10 text-2xl">
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/help">Help</NavLink>
        </div>
      </div>
    </section>
  );
}
