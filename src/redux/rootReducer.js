import { combineReducers } from "redux";
import appointmentReducer from "./appoinment/appoinmentReducer";
import registerReducer from "./register/registerReducer";
import langReducer from "./lang/langReducer";

const rootReducer = combineReducers({
  stateRegister: registerReducer,
  stateAppoinment: appointmentReducer,
  stateLang: langReducer,
});

export default rootReducer;
