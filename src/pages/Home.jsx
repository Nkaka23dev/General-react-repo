import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import React from "react";

export default function Home() {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  if (isError) {
    return <h1>Error occured, Sorry.</h1>;
  }
  if (isLoading) {
    return <h1 className="text-6xl text-red-600">Data is Loading.........</h1>;
  }
  return (
   <div className="grid">
       <div className="text-4xl text-center text-white bg-gray-800">
        <h1 className="pb-10">This is the Home Page</h1>
      <h1>{data?.fact}</h1>
    </div>
      <button onClick={refetch} className="p-4 mx-auto text-white mt-10 bg-red-500 hover:bg-red-600">Refetch The data</button>
   </div>
  );
}
