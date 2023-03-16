import React, { useState } from "react";
import BlogList from "./BlogList";

export default function Home() {
  const data = [
    {
      title: "First Title is here",
      body: "Content of the blog will be here",
      author: "Eric Nkaka",
      id: 1,
    },
    {
      title: "Blog is created",
      body: "Lorem ipsum dolor, sit amet .",
      author: "Eric Nkaka",
      id: 2,
    },
    {
      title: "Second Title Here",
      body: "Content of the blog will be here",
      author: "James Kizera",
      id: 3,
    },
  ];
  const [blogs, setBlogs] = useState(data);
  const handleDelete = (id) => {
    const newBlog = blogs.filter((value) => value.id !== id);
    setBlogs(newBlog);
  };
  return (
    <section>
      <BlogList blogs={blogs} handleDelete={handleDelete} title="All Blogs" />
      {/* <BlogList
        blogs={blogs.filter((value) => value.author === "Eric Nkaka")}
        title="Eric Nksaka's Blogs"
      /> */}
    </section>
  );
}
