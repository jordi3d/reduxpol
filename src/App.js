import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
//import { addTask, deleteTasks, markTask } from "./actions/taskActions";
import { addTask, deleteTasks, markTask } from "./tasker";
import "./App.css";

export default function App() {
  const tasks = useSelector((store) => store.taskReducer);
  const dispatchTask = useDispatch();
  const inputRef = useRef();
  const [inputTask, setInputTask] = useState("");

  return (
    <>
      <div id="todolist">
        <h1>TO DO LIST</h1>
        <div id="dataentry">
          <label htmlFor="inputTask">
            Entra la nova tasca:&nbsp;
            <input
              type="text"
              id="inputTask"
              ref={inputRef}
              onBlur={() => setInputTask(inputRef.current.value)}
            />
          </label>
          <button
            className="botonet1"
            onClick={() => {
              console.log(inputTask);
              dispatchTask(
                addTask({
                  id: inputTask,
                  descripcio: inputTask,
                  done: false,
                })
              );
            }}
          >
            Add Task
          </button>
          <br />
          <button
            className="botonet2"
            onClick={() => dispatchTask(deleteTasks(tasks))}
          >
            Delete Tasks
          </button>
          <table className="tauleta">
            <thead>
              <tr>
                <th width="50">DONE</th>
                <th width="327">TASKS</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => dispatchTask(markTask(task))}
                    />
                  </td>
                  <td className="esquerres">{task.descripcio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
