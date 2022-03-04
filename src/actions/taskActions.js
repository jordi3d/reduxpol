/*export const taskitas = [
  { id: "0", descripcio: "Tasca1", done: "" },
  { id: "1", descripcio: "Tasca2", done: "" },
  { id: "2", descripcio: "Tasca3", done: "" },
  { id: "3", descripcio: "Tasca4", done: "" },
];*/

export const addTask = (apunt) => {
  /*let copia = [...taskitas, apunt];
  console.log("Tasques:", copia.length, " vs ", taskitas.length);*/
  return { type: "ADD_TASK", llista: apunt /*copia*/ };
};

export const deleteTasks = (apunt) => {
  /* let b = 0;
  let copia = [];
  for (let i = 0; i < taskitas.length; i++) {
    copia[b] = taskitas[i];
    if (taskitas[i].done) {
      b++;
    }
  }
  if (b === 0) alert("Res a esborrar");
  else alert(`Esborrant ${b} tasques...`);*/
  return {
    type: "DELETE_TASKS",
    llista: apunt /*copia*/,
  };
};

export const markTask = (apunt) => {
  /*apunt.done = !apunt.done;
  console.log("Apunt: ", apunt.id, apunt.descripcio, apunt.done);*/
  return {
    type: "MARK_TASK",
  };
};
