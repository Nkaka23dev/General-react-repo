import React from "react";
import { useLoaderData } from "react-router";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl">Careers Page</h1>
        <div className="mt-10 space-y-3 text-xl ">
          {careers?.map((val, idx) => {
            return (
              <div
                key={idx}
                className="p-3 shadow-xl max-w-md hover:shadow-2xl cursor-pointer "
              >
                <h1 className="text-2xl text-gray-600">{val.title}</h1>
                <h1 className="text-red-500">{val.location}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const CareerLoader = async () => {
  const res = fetch("http://localhost:3000/careers");
  return (await res).json();
};
