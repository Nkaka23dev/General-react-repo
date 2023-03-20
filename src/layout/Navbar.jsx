import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <section className="shadow-xl">
      <div className="max-w-7xl mx-auto py-3 flex justify-between">
        <div>
          <h1 className=" text-3xl ">LOGO</h1>
        </div>
        <div className="flex gap-10 text-2xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/help">Helps</NavLink>
        </div>
      </div>
    </section>
  );
}
