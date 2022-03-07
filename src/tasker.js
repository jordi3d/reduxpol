const initialState = [{ id: "Tasca0", contingut: "Tasca0", done: false }];

const ADD_TASK = "ADD_TASK";
export function addTask(task) {
  console.log("Adding Task a addTask: ", task.id, task.descripcio);
  return { type: ADD_TASK, task };
}
const DELETE_TASKS = "DELETE_TASKS";
export function deleteTasks(tasks) {
  return { type: DELETE_TASKS, tasks };
}
const MARK_TASK = "MARK_TASK";
export function markTask(task) {
  return { type: MARK_TASK, task };
}
export function tasker(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      console.log("Adding task a tasker: ", state);
      let copia = [...state, state];
      return copia;
    case DELETE_TASKS:
      let j = 0;
      let copy = [];
      for (let i = 0; i < state.length; i++)
        if (state[i].done) {
          copy[j] = state[i];
          j++;
        }
      if (j === 0) {
        alert("Res a esborrar");
        return state;
      } else {
        alert(`Esborrant ${j} tasques...`);
        return copy;
      }
    case MARK_TASK:
      let copi = state;
      copi.done = !state.done;
      return copi;
    default:
      console.log("Entrant per default a Tasker: ", state);
      return state;
  }
}
