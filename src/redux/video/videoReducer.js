

const initializeState = {
show:true
};

const videoReducer = (state = initializeState, action) => {
  switch (action.type) {
    case "HIDE_VIDEO":
      return {
        ...state,
        show:false
      };
  
    default:
      return state;
  }
};

export default videoReducer;
