import { useToggle } from "./hooks/useToggle";
import SecondToggle from "./SecondToggle";

function App() {
  const [isVisible, toggle] = useToggle();
  return (
    <>
     <div className="mt-24 grid">
      <div className=" mx-auto">
        {/* <h1 className="text-center mb-10 text-4xl">{count}</h1> */}
        <button
          onClick={toggle}
          className="text-3xl  border border-red-500 p-4 font-semibold text-center hover:bg-red-500 hover:text-white text-red-500 duration-150"
        >
          {isVisible ? "Show" : "Hide"}
        </button>
      </div>
      {isVisible ? <h1 className="text-4xl text-center">Rendered Text</h1> : ""}
    </div>
    {/* I am using the same hook to toggle different buttons to demonstrate hook reusability */}
    <SecondToggle/>
    </>
  );
}

export default App;
