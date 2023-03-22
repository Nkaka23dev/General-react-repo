import { useState } from "react";
import ReactSwitch from "react-switch";

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <section className={` ${theme?'bg-gray-100':'bg-[#38004c]'} h-screen grid`}>
      <div className={`max-w-md w-full m-auto shadow-xl ${theme?'bg-white':'cardDark'}`}>
        <div className="p-10">
          <h1 className={`${theme?'':'ParDark'} text-center text-xl font-bold mb-8`}>Sign In</h1>
          <form action="" className="space-y-7 grid py-10">
            <input
              type="text"
              className="w-full bg-gray-50 placeholder:font-semibold placeholder:text-gray-600 placeholder:text-center rounded-full py-2 px-5 border border-gray-200 focus:outline-0"
              placeholder="Username"
            />
            <input
              type="text"
              className="w-full bg-gray-50 placeholder:font-semibold placeholder:text-gray-600 placeholder:text-center rounded-full py-2 px-5 border border-gray-200 focus:outline-0"
              placeholder="Password"
            />
            <button onClick={(e) => {e.preventDefault()}} className={`px-6 ${theme?'hover:bg-violet-600 bg-violet-500':'buttonDark'} rounded-full mx-auto py-2   text-white`}>
              Sign In
            </button>
            <h1 className={`px-6  mx-auto -font-semibold ${theme?'':'ParDark'}`}>Forgot Password</h1>
          </form>
        </div>
      </div>
      <div className="flex mx-auto -mt-14  gap-4">
        <h1 className={`${theme?'':'ParDark'} text-md`}>{theme?'Light Mode':'Dark Mode'}</h1>
        <div>
          <ReactSwitch
            onChange={() => setTheme((prev) => !prev)}
            checked={theme}
            className=""
          />
        </div>
      </div>
    </section>
  );
}

export default App;
