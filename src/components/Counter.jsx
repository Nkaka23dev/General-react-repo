import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../store";

export default function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className={`${count > 0?'text-blue-500':'text-red-600'} text-3xl text-center`}>{count}</h1>
      <div className="flex space-x-2 m-5">
        <button onClick={() => {dispatch(increase())}} className="p-2 text-white bg-green-400 hover:bg-green-500">
          Increase
        </button>
        <button onClick={() => {dispatch(decrease())}} className="p-2 text-white bg-green-400 hover:bg-green-500">
          Decrease
        </button>
      </div>
    </div>
  );
}
