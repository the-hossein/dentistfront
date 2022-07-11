const initializeState = {
  phoneNumber: "",
  code: ""
};

const registerReducer = (state = initializeState, action) => {
  switch (action.type) {
    case "FILL_INPUT_REGISTER":
      return {
        ...state,
        [action.e.target.name]: action.e.target.value
      };

    default:
      return state;
  }
};

export default registerReducer;
