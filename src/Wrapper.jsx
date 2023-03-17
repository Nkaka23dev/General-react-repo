import React from "react";

export default function Wrapper({ children }) {
  return (
    <div className="max-w-5xl mx-auto pt-4 px-3 space-y-3 ">
      {children}
    </div>
  );
}
