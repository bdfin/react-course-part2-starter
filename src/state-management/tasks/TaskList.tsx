import { useContext } from "react";
import tasksContext from "./tasksContext";

function useTasks() {
  return useContext(tasksContext);
}

export default function TaskList() {
  const { tasks, dispatch } = useTasks();

  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Title" + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
