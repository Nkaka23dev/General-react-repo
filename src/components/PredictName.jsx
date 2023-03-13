import axios from "axios";
import React, { useState } from "react";

export default function PredictName() {
  const [data, setData] = useState(null);
  const [name, setname] = useState("");
  const handleClick = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
      setData(response.data);
      console.log(response);
    });
  };
  return (
    <div className="max-w-3xl mx-auto">
      <div>
        <input
          type="text"
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter a name to predict..."
        />
        <button
          onClick={handleClick}
          className="p-3 bg-green-400 mt-6 text-white mx-auto hover:bg-green-500"
        >
          Predict a name
        </button>
        <h1 className="text-3xl font-bold underline py-1 text-center">
          Predicted Age: {data?.age}
        </h1>
        <h1 className="text-3xl font-bold underline py-1 text-center">
          Predicted Name: <span className="text-green-600 uppercase"> {data?.name}</span>
        </h1>
        <h1 className="text-3xl font-bold underline py-1 text-center">
          count: {data?.count}
        </h1>
      </div>
    </div>
  );
}
