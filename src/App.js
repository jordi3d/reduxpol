import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { addTask, deleteTasks, markTask } from "./actions/taskActions";
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
                  done: "",
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
                <th width="315">TASKS</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((n, index) => (
                <tr key={n.id}>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={tasks[index].mark}
                      onClick={() => dispatchTask(markTask(tasks[index]))}
                    />
                  </td>
                  <td className="esquerres">{tasks[index].descripcio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
