import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Wrapper from "./Wrapper";

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <section className="mt-24">
      <Wrapper>
        {isLoading && (
          <h1 className="text-2xl text-center m-auto">Loading........</h1>
        )}
        {error && (
          <h1 className="text-2xl text-center m-auto text-red-500">{error}</h1>
        )}
        <div className="">
          <h2 className="text-red-500 text-xl font-semibold">{blog.title}</h2>
          <h2>Written By - {blog.author}</h2>
          <div className="mt-3">{blog.body}</div>
        </div>
      </Wrapper>
    </section>
  );
}
