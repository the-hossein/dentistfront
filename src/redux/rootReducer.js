import { combineReducers } from "redux";
import appointmentReducer from "./appoinment/appoinmentReducer";
import registerReducer from "./register/registerReducer";

const rootReducer = combineReducers({
  stateRegister: registerReducer,
  stateAppoinment: appointmentReducer
});

export default rootReducer;
