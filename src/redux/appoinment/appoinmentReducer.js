const initializeState = {
  time: [],
  date: {
    timestamp: "",
    date: ""
  },
  timeLoader: true,
  dateLoader: false,
  timeSelected: { name: "", value: "" },
  selectedService: { name: "", value: "" },
  loader: false,
  appointmentID: "",

  showResult: false
};

const appointmentReducer = (state = initializeState, action) => {
  switch (action.type) {
    case "GET_TIME":
      const converTimes = [];
      for (let i = 0; i < action.times.length; i++) {
        switch (action.times[i].time) {
          case 0:
            converTimes.push({
              time: "08-10",
              state: action.times[i].state,
              num: action.times[i].time
            });
            break;

          case 1:
            converTimes.push({
              time: "10-12",
              state: action.times[i].state,
              num: action.times[i].time
            });
            break;

          case 2:
            converTimes.push({
              time: "13-18",
              state: action.times[i].state,
              num: action.times[i].time
            });
            break;
          case 3:
            converTimes.push({
              time: "18-19",
              state: action.times[i].state,
              num: action.times[i].time
            });
            break;
          case 4:
            converTimes.push({
              time: "19-20",
              state: action.times[i].state,
              num: action.times[i].time
            });

            break;
          case 5:
            converTimes.push({
              time: "20-21",
              state: action.times[i].state,
              num: action.times[i].time
            });
            break;

          case 6:
            converTimes.push({
              time: "20-21",
              state: action.times[i].state,
              num: action.times[i].time
            });
            break;

          case 7:
            converTimes.push({
              time: "20-21",
              state: action.times[i].state,
              num: action.times[i].time
            });
            break;

          case 8:
            converTimes.push({
              time: "20-21",
              state: action.times[i].state,
              num: action.times[i].time
            });
            break;

          case 9:
            converTimes.push({
              time: "20-21",
              state: action.times[i].state,
              num: action.times[i].time
            });
            break;

          case 10:
            converTimes.push({
              time: "20-21",
              state: action.times[i].state,
              num: action.times[i].time
            });
            break;
          default:
            action.times;
            break;
        }
      }
      console.log(converTimes);
      return {
        ...state,
        time: converTimes,
        timeLoader: false
      };
    case "TIME_LOADER_TRUE":
      return {
        ...state,
        timeLoader: true
      };
    case "GET_DATE":
      return {
        ...state,
        date: { timestamp: action.timestamp, date: action.date },
        timeLoader: false
      };
    case "ADD_TIME":
      return {
        ...state,
        timeSelected: {
          name: action.time,
          value: action.value
        }
      };
    case "ADD_SERVICE":
      return {
        ...state,
        selectedService: {
          name: action.name,
          value: action.value
        }
      };
    case "LOADER_RESERVATION_TRUE":
      return {
        ...state,
        loader: true
      };
    case "SET_SUCCESS_RESERVATION":
      return {
        ...state,
        loader: false,
        showResult: true,
        appointmentID: action.id
      };
    default:
      return state;
  }
};

export default appointmentReducer;
