import { combineReducers } from "redux";
import appointmentReducer from "./appoinment/appoinmentReducer";
import registerReducer from "./register/registerReducer";
import langReducer from "./lang/langReducer";
import videoReducer from "./video/videoReducer";

const rootReducer = combineReducers({
  stateRegister: registerReducer,
  stateAppoinment: appointmentReducer,
  stateLang: langReducer,
  stateVideo:videoReducer
});

export default rootReducer;
