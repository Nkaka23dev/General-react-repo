import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="max-w-7xl mx-auto space-y-4 ">
      <h1 className="text-4xl font-bold text-gray-700 mt-24">Page not found 404!</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic magnam
        quod ipsam ex sed saepe laborum a quidem corporis temporibus sint
        impedit, distinctio, ducimus accusantium? Quod illo molestiae aliquid.
      </div>
      <p className="text-xl font-semibold">
        Go to the <Link className="cursor-pointer underline text-blue-500" to="/">Home Page</Link>.
      </p>
    </div>
  );
}
