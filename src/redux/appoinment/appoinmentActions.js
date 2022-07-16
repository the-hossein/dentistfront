import callApi from "../../api/callApi";
import { BASE_URL, GET_TIME_STATE, SET_RESERVATION } from "../../api/urls";
import { convertISOS } from "../../tools/helper";
import { notify } from "../../tools/toast/toast";
export const getTime = (times) => {
  return {
    type: "GET_TIME",
    times: times
  };
};
export const getDate = (date, timestamp) => {
  return {
    type: "GET_DATE",
    date: date,
    timestamp: timestamp
  };
};
export const addTime = (time, value) => {
  return {
    type: "ADD_TIME",
    time: time,
    value: value
  };
};
export const addService = (value, name) => {
  return {
    type: "ADD_SERVICE",
    value: value,
    name: name
  };
};
export const timeLoaderTrue = () => {
  return {
    type: "TIME_LOADER_TRUE"
  };
};
export const noTime = () => {
  return {
    type: "NO_TIME"
  };
};
export const getTimeState = (date, service) => {
  return (dispatch) => {
    dispatch(timeLoaderTrue());
    const getTimes = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      console.log(service);
      console.log(date);

      const response = await callApi(
        `${BASE_URL + GET_TIME_STATE}?Day=${date}&Service=${service}`,
        "{}",
        myHeaders,
        "GET"
      );
      console.log(response[0]);
      if (response[0].code === 200) {
        dispatch(getTime(response[0].data));
      } else if (response[0].code === 206) {
        dispatch(noTime());
      } else {
        notify(t("problemInAppoinment"), "error");
      }
    };
    getTimes();
  };
};
export const setSuccessReservation = (data, lang) => {
  return {
    type: "SET_SUCCESS_RESERVATION",
    data: data,
    lang: lang
  };
};
export const loaderResesrvition = () => {
  return {
    type: "LOADER_RESERVATION_TRUE"
  };
};

export const setReservation = (data, user, token, lang, setshowChild) => {
  return (dispatch) => {
    dispatch(loaderResesrvition());
    const getTimes = async () => {
      var myHeaders = new Headers();
      myHeaders.append(`Authorization`, `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        userid: user.userId,
        date: convertISOS(data.date.timestamp),
        time: +data.timeSelected.value,
        service: +data.selectedService.name
      });

      const response = await callApi(
        BASE_URL + SET_RESERVATION,
        raw,
        myHeaders,
        "POST"
      );
      console.log(response[0].data);
      if (response[0].code === 200) {
        setshowChild(true);
        dispatch(setSuccessReservation(response[0].data, lang));
      }
    };
    getTimes();
  };
};
