import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function CareersError() {
  const error = useRouteError();
  return (
    <div className="max-w-6xl mx-auto">
      <div className="py-16 text-xl space-y-2 cursor-pointer shadow-md mt-5 hover:shadow-2xl px-6 max-w-4xl ">
        <h1 className="text-red-500 text-4xl">{error.message}</h1>
      </div>
      <Link to="/">
        <button className="p-2 underline text-xl text-blue-500">
          Back To Home page
        </button>
      </Link>
    </div>
  );
}
