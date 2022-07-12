import { combineReducers } from "redux";
import registerReducer from "./register/registerReducer";
import langReducer from "./lang/langReducer";

const rootReducer = combineReducers({
  stateRegister: registerReducer,
  stateLang: langReducer,
});

export default rootReducer;
