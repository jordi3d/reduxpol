const initialState = [];
export const taskitas = [
  { id: "0", descripcio: "Tasca1", done: "" },
  { id: "1", descripcio: "Tasca2", done: "" },
  { id: "2", descripcio: "Tasca3", done: "" },
  { id: "3", descripcio: "Tasca4", done: "" },
];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      let copy = [...taskitas, state];
      console.log("Tasques:", copy.length, " vs ", taskitas.length);
      return [...copy, action.payload];
    case "DELETE_TASK": //de moment farà el mateix
      let b = 0;
      let copia = [];
      for (let i = 0; i < taskitas.length; i++) {
        copia[b] = taskitas[i];
        if (taskitas[i].done) {
          b++;
        }
      }
      if (b === 0) alert("Res a esborrar");
      else alert(`Esborrant ${b} tasques...`);
      return [...copia, action.payload];
    case "MARK_TASK":
      state.done = !state.done;
      console.log("Apunt: ", state.id, state.descripcio, state.done);
      return state;
    default:
      return state;
  }
};

export default taskReducer;
