const initializeState = {
  time: []
};

const appointmentReducer = (state = initializeState, action) => {
  switch (action.type) {
    case "GET_TIME":
      console.log(action.times);
      for (let i = 0; i < action.times.length; i++) {
        switch (action.times[i].time) {
          case 0:
            return {
              ...state,
              time:state.time.push({time:"20-20",state:action.times[i].state})
            };

          default:
            break;
        }
      }

    default:
      return state;
  }
};

export default appointmentReducer;
