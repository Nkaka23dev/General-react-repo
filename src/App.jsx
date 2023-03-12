import { useState } from "react";
import Task from "./components/task";

function App() {
  const [todo, setTodo] = useState([]);
  const [newTask, setnewTask] = useState("");

  const handleChange = (event) => {
    setnewTask(event.target.value);
  };
  const completeTask = (id) => {
    const completed = todo.map((value) =>
      value.id === id ? { ...value, complete: true } : value
    );
    setTodo(completed);
  };
  const handleClick = () => {
    const task = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      name: newTask,
      complete: false,
    };
    setTodo([...todo, task]);
  };
  const deleteTask = (id) => {
    const newTodoList = todo.filter((value) =>
      value.id !== id ? true : false
    );
    setTodo(newTodoList);
  };
  return (
    <>
      <section className="px-4 py-10 max-w-3xl mx-auto ">
        <div className="">
          <div className="relative">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Enter a todo"
              className="w-full focus:outline-0 border border-gray-400 py-3 px-4"
            />
            <button
              onClick={handleClick}
              className="absolute right-0 bg-blue-400 h-full px-6 text-white capitalize font-semibold hover:bg-blue-500"
            >
              Submit
            </button>
          </div>
          <Task
            todo={todo}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        </div>
      </section>
    </>
  );
}

export default App;
