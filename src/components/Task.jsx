export default function Task({ todo, deleteTask, completeTask}) {
  return (
    <div className="px-2 mt-5 space-y-4 ">
      {todo.map((task, index) => {
        return (
          <div key={index} className="flex justify-between">
            <h1 className={`text-2xl font-semibold text-gray-600 ${task.complete?'line-through line ':''}`}>
              {task.name}
            </h1>
            <div className="flex gap-3">
              <button
                onClick={() => completeTask(task.id)}
                className="px-5 py-3 text-white bg-green-400 hover:bg-green-500 items-start"
              >
                complete
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="px-5 py-3 text-white bg-red-400 hover:bg-red-500 items-start"
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
