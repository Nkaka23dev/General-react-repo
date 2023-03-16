import React from "react";

export default function Navbar() {
  return (
    <section>
      <div className="max-w-5xl text-red-600 mx-auto py-4 px-3 flex justify-between">
        <div>
          <h1 className="text-3xl cursor-pointer font-bold">The Gym Blog</h1>
        </div>
        <div>
          <ul className="flex  text-gray-700 gap-10 text-xl font-semibold cursor-pointer">
            <li className="hover:underline hover:text-red-500">Blog</li>
            <li className="hover:underline hover:text-red-500">New Blog</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
