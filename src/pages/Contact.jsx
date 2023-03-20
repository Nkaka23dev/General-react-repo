import React from "react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto mt-24 ">
      <h3 className="text-4xl txt-center text-center">Fill The form to contact</h3>
      <div className="max-w-3xl mx-auto mt-10 space-y-4">
        <input
          type="text"
          className="w-full py-4 px-5 border border-gray-600 focus:outline-0"
          placeholder="Enter your email..."
        />
        <input
          type="text"
          className="w-full py-4 px-5 border border-gray-600 focus:outline-0"
          placeholder="Enter your email..."
        />
      </div>
    </div>
  );
}
