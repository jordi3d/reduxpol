import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { addTask, deleteTasks, markTask } from "./actions/taskActions";
import { taskitas } from "./reducers/taskReducer";
import "./App.css";

export default function App() {
  //const task = useSelector((store) => store.taskReducer.action);
  const dispatchTask = useDispatch();
  const inputRef = useRef();

  return (
    <>
      <div id="todolist">
        <h1>TO DO LIST</h1>
        <div id="dataentry">
          <label>
            Entra la nova tasca:&nbsp;
            <input type="text" id="inputTask" ref={inputRef} />
          </label>
          <button
            className="botonet1"
            onClick={() =>
              dispatchTask(
                addTask({
                  id: inputRef.current.value,
                  descripcio: inputRef.current.value,
                  done: false,
                })
              )
            }
          >
            Add Task
          </button>
          <br />
          <button
            className="botonet2"
            onClick={() => dispatchTask(deleteTasks())}
          >
            Delete Tasks
          </button>
          <table className="tauleta">
            <thead>
              <tr>
                <th>DONE</th>
                <th width="300">TASKS</th>
              </tr>
            </thead>
            <tbody>
              {taskitas.map((n, index) => (
                <tr key={n.id}>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={taskitas[index].mark}
                      onClick={() => dispatchTask(markTask(taskitas[index]))}
                    />
                  </td>
                  <td className="esquerres">{taskitas[index].descripcio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
