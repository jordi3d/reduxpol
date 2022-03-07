export const addTask = (apunt) => {
  alert("adding task a taskActions");
  return { type: "ADD_TASK", llista: apunt };
};

export const deleteTasks = (apunt) => {
  return {
    type: "DELETE_TASKS",
    llista: apunt,
  };
};

export const markTask = (apunt) => {
  return {
    type: "MARK_TASK",
    llista: apunt,
  };
};
