import { useMemo, useState } from "react"

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCountOne = () => {
    setCount1(prev => prev + 1)
  }


  const isEven = () => {
    let value;
    setTimeout(() => {
      value = count1 % 2 === 0;
    }, 60000);
    return value
  }

  const incrementCountTwo = () => {
    setCount2(prev => prev + 1)
  }

  return (
    <div className="grid max-w-xl mx-auto py-10 space-y-5 px-3">
      <button onClick={incrementCountOne} className="py-3 px-10 text-white bg-green-500
       hover:bg-green-600">Count One  -  <span className="text-xl">{count1}</span></button>
      <h1>{isEven() ? count1 : ''}</h1>
      <button onClick={incrementCountTwo} className="py-3 px-10 text-white bg-yellow-500
       hover:bg-yellow-600">Count One  -  <span className="text-xl">{count2}</span></button>
    </div>
  )
}

export default App
