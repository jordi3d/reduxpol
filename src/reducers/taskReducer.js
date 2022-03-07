const initialState = [
  /*];
export const taskitas = [*/
  { id: "0", descripcio: "Tasca1", done: "" },
  { id: "1", descripcio: "Tasca2", done: "" },
  { id: "2", descripcio: "Tasca3", done: "" },
  { id: "3", descripcio: "Tasca4", done: "" },
];

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log("afegint", { state, action });
      let copy = [...state, action.tasketa];
      console.log("Tasques:", copy.length, " vs ", state.length);
      return [...copy];
    case "DELETE_TASKS":
      alert("esborrant");
      let b = 0;
      let copia = [];
      for (let i = 0; i < state.length; i++) {
        if (state[i].done) {
          copia[b] = state[i];
          b++;
        }
      }
      if (b === 0) {
        alert("Res a esborrar");
        return state;
      } else {
        alert(`Esborrant ${b} tasques...`);
        return [...copia];
      }
    case "MARK_TASK":
      alert("marcant");
      let copi = state;
      copi.done = !state.done;
      console.log("Apunt: ", copi.id, copi.descripcio, copi.done);
      return copi;
    default:
      alert("default");
      for (let i = 0; i < state.length; i++) console.log(state[i].descripcio);
      return state;
  }
};

export default taskReducer;
