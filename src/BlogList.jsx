import React from "react";
import { Link } from "react-router-dom";

export default function BlogList({ blogs, title, handleDelete }) {
  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto pt-4 px-3 space-y-3">
        <h1 className="text-gray-600  text-2xl font-bold">{title}</h1>
        {blogs.map((data, idx) => {
          return (
           <Link to={`/blog/${data.id}`}>
            <div
              key={idx}
              className="hover:shadow-2xl max-w-lg cursor-pointer py-2 px-4"
            >
              <h1 className="text-red-600  text-2xl">{data.title}</h1>
              <h2 className="text-gray-700 text-lg">
                Written By: 
                <span className="font-semibold px-3 text-gray-800">
                  {data.author}
                </span>
              </h2>
            </div>
           </Link>
          );
        })}
      </div>
    </section>
  );
}
