import React from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl">Careers Page</h1>
        <div className="mt-10 space-y-3 text-xl ">
          {careers?.map((val, idx) => {
            return (
              <Link key={idx} to={val.id.toString()}>
                <div className="p-3 shadow-xl max-w-md hover:shadow-2xl cursor-pointer ">
                  <h1 className="text-2xl text-gray-600">{val.title}</h1>
                  <h1 className="text-red-500">{val.location}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const CareerLoader = async () => {
  const res = await fetch("http://localhost:3000/careers");
  if (!res.ok) {
    throw Error("Couldn't fetch careers, Error occured!");
  }
  return res.json();
};
