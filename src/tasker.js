const initialState = [];

const ADD_TASK = "ADD_TASK";
export function addTask(tasketa) {
  return { tasketa, type: ADD_TASK };
}
const DELETE_TASKS = "DELETE_TASKS";
export function deleteTasks(tasketa) {
  return { tasketa, type: DELETE_TASKS };
}
const MARK_TASK = "MARK_TASK";
export function markTask(tasketa) {
  return { tasketa, type: MARK_TASK };
}
export function tasker(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      let copia = [...state, action.tasketa];
      return copia;
    case DELETE_TASKS:
      return state.filter((t) => !t.done);
    /*let j = 0;
      let copy = [];
      for (let i = 0; i < state.length; i++)
        if (!state[i].done) {
          copy[j] = state[i];
          j++;
        }
      if (j === 0) {
        alert("Res a esborrar");
        return state;
      } else {
        alert(`Esborrant ${j} tasques...`);
        return copy;
      }*/
    case MARK_TASK:
      let copi = action.tasketa;
      copi.done = !action.tasketa.done;
      return state;
    default:
      return state;
  }
}
