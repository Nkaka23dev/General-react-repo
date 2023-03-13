import { useEffect, useState } from "react";
import Text from "./components/Text";

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.count("useEffect Run");
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl">{number}</h1>
      </div>
    </>
  );
}

export default App;
