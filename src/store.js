import { createStore, combineReducers } from "redux";
//import { counterReducer } from "./reducers/counterReducer";
//import { taskReducer } from "./reducers/taskReducer";
import { tasker } from "./tasker";

const appReducer = combineReducers({
  //taskReducer: taskReducer,
  taskReducer: tasker,
  //counterReducer: counterReducer,
});

export default createStore(appReducer);
