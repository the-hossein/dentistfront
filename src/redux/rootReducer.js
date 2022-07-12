import { combineReducers } from "redux";
import registerReducer from "./register/registerReducer";

const rootReducer = combineReducers({
  stateRegister: registerReducer,
});

export default rootReducer;
