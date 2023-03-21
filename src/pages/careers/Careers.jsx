import React from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();
  console.log(careers);
  return (
    <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl my-8 font-bold text-gray-500">List of all Careers</h1>
      <Link className="">
        {careers
          ? careers.map((career,val) => {
              return (
                <div key={val} className="py-4 text-xl shadow-md mt-5 hover:shadow-2xl px-6 max-w-sm ">
                  <h1>{career?.title}</h1>
                  <h1 className="text-red-300 font-semibold">{career?.location}</h1>
                </div>
              );
            })
          : ""}
      </Link>
    </div>
  );
}

export const careersLoad = async () => {
  const response = await fetch("http://localhost:3000/careers");
  return response.json();
};
