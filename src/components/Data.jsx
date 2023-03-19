import React from "react";
import { useGetAllProductsQuery } from "../utils/apiSlice";

export default function Data() {
  const { data } = useGetAllProductsQuery();
 if(data){
    console.log(data.products)
 }else{
    console.log("data not yet loaded")
 }
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500 text-center">
       Data
      </h1>
    </div>
  );
}
