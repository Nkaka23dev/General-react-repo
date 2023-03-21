import React from "react";
import { NavLink } from "react-router-dom";

export default function Help() {
  return (
    <section className="max-w-7xl mx-auto space-y-5 text-lg">
      <h1 className="text-4xl font-semibold text-yellow-600 my-10">
        About page
      </h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsam
        ipsum voluptatibus, fugiat maiores facere officiis non, excepturi soluta
        sapiente iusto modi vero ratione dicta veritatis incidunt minus quod,
        quam quidem. Eligendi amet molestiae ex ipsa libero, facilis quis
        pariatur.
      </div>
      <div className="flex gap-16">
        <NavLink to="contact" className="border n border-gray-600 text-md px-3">
          Contact U s
        </NavLink>
        <NavLink to="faq" className="border n border-gray-600 text-md px-3">
          FAQs
        </NavLink>
      </div>
    </section>
  );
}
