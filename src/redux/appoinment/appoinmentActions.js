import callApi from "../../api/callApi";
import { BASE_URL, GET_TIME_STATE, SET_RESERVATION } from "../../api/urls";
import { convertISOS } from "../../tools/helper";

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
export const getTimeState = (date) => {
  return (dispatch) => {
    dispatch(timeLoaderTrue());
    const getTimes = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const response = await callApi(
        `${BASE_URL + GET_TIME_STATE}?Day=${date}`,
        "{}",
        myHeaders,
        "GET"
      );
      console.log(response[0]);
      if (response[0].code === 200) {
        dispatch(getTime(response[0].data));
      }
    };
    getTimes();
  };
};
export const setSuccessReservation = (id) => {
  return {
    type: "SET_SUCCESS_RESERVATION",
    id: id
  };
};
export const loaderResesrvition = () => {
  return {
    type: "LOADER_RESERVATION_TRUE"
  };
};
export const setReservation = (data, user, token) => {
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
      console.log(response[0].data.id);
      if (response[0].code === 200) {
        dispatch(setSuccessReservation(response[0].data.id));
      }
    };
    getTimes();
  };
};
