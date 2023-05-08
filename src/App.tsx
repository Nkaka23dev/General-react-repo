import axios from "axios";
import { useEffect, useState, useMemo } from "react"

function App() {
  const [data, setData] = useState<any>();
  const [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((result: any) => setData(result.data))
    console.log("USEEEFECFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF")
  }, []);

  const findTheLongestName = (comments: any) => {
    if (!comments) return null;
    let longestName = ""
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("<============== I AM BEING CALLED ============>")
    return longestName;
  }
  const getTheLongestName = useMemo(() => findTheLongestName(data), [data]);
  
  return (
    <div className="grid">
      <h1 className="text-center">React UseMemo Hook <span className="text-xl text-red-500">{getTheLongestName}</span> </h1>
      <button onClick={() => setToggle(!toggle)}
        className="py-3 mx-auto px-5 bg-sky-500 text-white text-lg font-semibold">
        {toggle ? "Show" : "Hidden"}
      </button>
    </div>
  )
}

export default App
