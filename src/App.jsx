import axios from "axios";
import { useEffect, useState } from "react";
import PredictName from "./components/PredictName";

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchdata = () => {
    axios.get("https://catfact.ninja/fact").then((data) => {
      setCatFact(data.data.fact);
    });
  };
  useEffect(() => {
    // fetch("https://catfact.ninja/fact").then((data) => {
    //   const response = data.json();
    //   response.then((res) => {
    //     console.log(res.fact);
    //   });
    // });
    fetchdata();
  }, []);

  return (
    <>
      {/* <div className="grid">
      <button
        onClick={fetchdata}
        className="p-3 bg-green-400 mt-6 text-white mx-auto hover:bg-green-500"
      >
        Fetch api Data
      </button>
      <h1 className="text-3xl font-bold underline text-red-500 text-center">
        {catFact}
      </h1>
    </div>  */}
      <PredictName />
    </>
  );
}

export default App;
