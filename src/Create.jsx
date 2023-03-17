import React, { useState } from "react";
import Wrapper from "./Wrapper";

export default function Create() {
  const data = ["Eric Nkaka", "James Kwizera", "Shyaka Will", "Manzi Yvette"];
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Eric Nkaka");
  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = { title, body, author };
    setIsloading(true);
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    }).then(() => {
      console.log("new Content Added");
      setAuthor("Eric Nkaka")
      setTitle("")
      setBody("")
      setIsloading(false);
    });
  };

  return (
    <Wrapper>
      <div className="mt-24 max-w-2xl mx-auto">
        <form action="#" onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label>Title</label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full  mt-2  py-2 px-3 border border-gray-600 focus: outline-0"
              type="text"
              placeholder="Enter title..."
            />
          </div>
          <div>
            <label>Body</label>
            <textarea
              value={body}
              required
              onChange={(e) => setBody(e.target.value)}
              className="w-full  mt-2  py-2 px-3 border border-gray-600 focus: outline-0"
              type="text"
            ></textarea>
          </div>
          <div>
            <label>Blog Author</label>
            <select
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full mt-2 py-2 px-3 border border-gray-600 focus: outline-0"
            >
              {data.map((d, idx) => {
                return (
                  <option key={idx} value={d}>
                    {d}
                  </option>
                );
              })}
            </select>
          </div>
          {!isLoading && (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white hover:bg-blue-600 py-3"
            >
              Submit
            </button>
          )}
          {isLoading && (
            <button
              type="submit"
              disabled
              className="w-full bg-blue-500 text-white hover:bg-blue-600 py-3"
            >
              Fetching the data
            </button>
          )}
        </form>
      </div>
    </Wrapper>
  );
}
