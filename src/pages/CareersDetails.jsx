import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

export default function CareersDetails() {
  const career = useLoaderData();
  console.log(career);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="py-4 text-xl space-y-2 cursor-pointer shadow-md mt-5 hover:shadow-2xl px-6 max-w-4xl ">
        <h1 className="text-4xl font-bold text-gray-500">
          Career Details for {career.title}{" "}
          <form action="" method="post"></form>
        </h1>
        <h1 className="text-red-300  text-2xl font-semibold">
          Location: {career.location}
        </h1>
        <h1 className="text-blue-300 text-2xl font-semibold">
          Salary: {career.salary}
        </h1>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, labore
          vitae officiis voluptates, quas ducimus, id natus earum harum quod a
          nostrum cum error aliquid. Nostrum laudantium commodi error dolor
          debitis eius odio fugiat tenetur, hic sit veniam atque magni?
        </div>
      </div>
      <Link to="/careers">
        <button className="p-2 underline text-xl text-blue-500">
          Back To Careers
        </button>
      </Link>
    </div>
  );
}

export const getCareerDetailsData = async ({ params }) => {
  const { id } = params;
  const result = await fetch(" http://localhost:3000/careers/" + id);
  return result.json();
};
