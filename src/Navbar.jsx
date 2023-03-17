import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

export default function Navbar() {
  return (
    <section>
      <Wrapper>
        <div className="flex justify-between mt-10">
          <div>
            <Link to="/" className="text-3xl cursor-pointer font-bold">
              The Gym Blog
            </Link>
          </div>
          <div>
            <div className="flex  text-gray-700 gap-10 text-xl font-semibold cursor-pointer">
              <Link className="hover:underline hover:text-red-500">Blog</Link>
              <Link to="/create" className="hover:underline hover:text-red-500">
                New Blog
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
