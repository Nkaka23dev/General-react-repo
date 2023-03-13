import { useEffect, useState } from "react";

export default function Text() {
  const [userName, setUserName] = useState();
  const [state, setState] = useState({
    userName: "",
    selected: false,
  });
  useEffect(() => {
    console.count("useEffect Run");
  }, [state.userName, state.selected]);

  const handleAdd = () => {
    setState({ ...state, userName: userName });
  };
  const handSelect = () => {
    setState({ ...state, selected: true });
  };
  return (
    <div className="max-w-3xl mx-auto">
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter....."
        className="w-full focus:outline-none px-4 py-4 border border-gray-700"
      />
      <button onClick={handleAdd} className="mx-6">
        Add Name
      </button>
      <button onClick={handSelect}>Select</button>
      <div className="">
        <h1>Name: {state.userName}</h1>
        <h1>Selected: {state.selected.toString()}</h1>
      </div>
    </div>
  );
}
