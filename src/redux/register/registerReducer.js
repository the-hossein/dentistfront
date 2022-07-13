const initializeState = {
  phoneNumber: "",
  code: "",
  phoneLoading: false,
  codeLoading: false,
  loginStatus: false,
  userDataLoader: false,
  userId: ""
};

const registerReducer = (state = initializeState, action) => {
  switch (action.type) {
    case "FILL_INPUT_REGISTER":
      return {
        ...state,
        [action.e.target.name]: action.e.target.value
      };
    case "PRELOAD_REGISTER":
      return {
        ...state,
        [action.name]: true
      };
    case "PAUSE_PRELOAD_REGISTER":
      return {
        ...state,
        [action.name]: false
      };
    case "LOGIN_STATUS_TRUE":
      return {
        ...state,
        loginStatus: true
      };
    case "LOGIN_STATUS_FALSE":
      return {
        ...state,
        loginStatus: false
      };
    case "USER_DATA_LOADER":
      return {
        ...state,
        userDataLoader: true
      };
    case "USER_DATA":
      return {
        ...state,
        userDataLoader: false,
        userId: action.user.user.id
      };
    case "LOGOUT":
      return {
        ...state,
        phoneNumber: "",
        code: "",
        phoneLoading: false,
        codeLoading: false,
        loginStatus: false,
        userDataLoader: false,
        userId: ""
      };
    default:
      return state;
  }
};

export default registerReducer;
