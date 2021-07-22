import { combineReducers } from "redux";
import dndReducer from "./dndReducer";

const rootReducer = combineReducers({
  dnd: dndReducer,
});

export default rootReducer;
