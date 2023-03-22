import React from "react";
import { Outlet } from "react-router";
import Careers from "../pages/careers/Careers";

export default function CareersLayout() {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-4xl text-gray-500">Careers Details page</h1>
        <div className="max-w-3xl py-2 text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          enim tempora consectetur corrupti hic deleniti, autem quod cumque
          ratione voluptatum!
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
