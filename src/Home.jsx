import BlogList from "./BlogList";
import useFetch from "./useFetch";

export default function Home() {
const {data:blogs, error, isLoading} = useFetch("http://localhost:8000/blogs");

  const handleDelete = (id) => {
    const newBlog = blogs.filter((value) => value.id !== id);
    setBlogs(newBlog);
  };
  return (
    <section className="grid">
      <BlogList blogs={blogs} handleDelete={handleDelete} title="All Blogs" />
      {isLoading && (
        <h1 className="text-2xl text-center m-auto">Loading........</h1>
      )}
       {error && (
        <h1 className="text-2xl text-center m-auto text-red-500">{error}</h1>
      )}
    </section>
  );
}
