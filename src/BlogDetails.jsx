import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Wrapper from "./Wrapper";

export default function BlogDetails() {
  const { id } = useParams();
  const history = useHistory();

  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/")
    });
  };
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
          <button
            onClick={handleDelete}
            className="p-1 mt-3 rounded-xl px-3 text-white bg-red-400 hover:bg-red-500"
          >
            Delete A blog
          </button>
        </div>
      </Wrapper>
    </section>
  );
}
