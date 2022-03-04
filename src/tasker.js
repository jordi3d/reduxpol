const ADD_TASK = "ADD_TASK";
export function addTask(task) {
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
export function tasker(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return state;
    case DELETE_TASKS:
      let j = 0;
      let copy = [];
      for (let i = 0; i < state.length; i++)
        if (state[i].done) {
          copy[j] = state[i];
          j++;
        }
      return copy;
    case MARK_TASK:
      return state;
    default:
      return state;
  }
}
