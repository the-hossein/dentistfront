import { convertDate, convertServise } from "../../tools/helper";

const initializeState = {
  time: [],
  date: {
    timestamp: "",
    date: ""
  },
  noTime: false,
  timeLoader: false,
  dateLoader: false,
  timeSelected: { name: "", value: "" },
  selectedService: { name: "", value: "" },
  loader: false,
  reservitionResult: {
    id: "",
    date: "",
    services: "",
    time: ""
  },

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
          case 11:
            converTimes.push({
              time: "21-22",
              state: action.times[i].state,
              num: action.times[i].time
            });
            break;
          case 12:
            converTimes.push({
              time: "22-23",
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
        timeLoader: false,
        noTime: false
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
        timeLoader: false,
        timeSelected: { name: "", value: "" }
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
      var timeReservtion = "";

      switch (action.data.time) {
        case 0:
          timeReservtion = "08-10";

          break;

        case 1:
          timeReservtion = "10-12";
          break;

        case 2:
          timeReservtion = "13-18";
          break;
        case 3:
          timeReservtion = "18-19";
          break;
        case 4:
          timeReservtion = "19-20";

          break;
        case 5:
          timeReservtion = "20-21";
          break;

        case 6:
          timeReservtion = "20-21";
          break;

        case 7:
          timeReservtion = "20-21";
          break;

        case 8:
          timeReservtion = "20-21";
          break;

        case 9:
          timeReservtion = "20-21";
          break;

        case 10:
          timeReservtion = "20-21";
          break;
        case 11:
          timeReservtion = "21-22";
          break;
        case 12:
          timeReservtion = "22-23";
          break;
        default:
          timeReservtion;
          break;
      }

      return {
        ...state,
        loader: false,
        showResult: true,
        reservitionResult: {
          id: action.data.id,
          date: action.data.date,
          time: timeReservtion,
          services: convertServise(action.data.services)
        }
      };

    case "NO_TIME":
      return {
        ...state,
        noTime: true,
        timeLoader: false
      };

    default:
      return state;
  }
};

export default appointmentReducer;
