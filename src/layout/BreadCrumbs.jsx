import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();
  let currentLink = "";

  const crumb = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, idx) => {
      currentLink += `/${crumb}`;
      return (
        <div
          className="text-4xl text-blue-500 font-bold capitalize flex gap-10"
          key={idx}
        >
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return (
    <section className="mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-5 after:">{crumb}</div>
      </div>
    </section>
  );
}
