import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RowJustifyBetween } from "../../../styles/globalStyleComponents";
import callApi from "../../api/callApi";
import { getTime } from "../../redux/appoinment/appoinmentActions";
import DropDown from "./DropDown";
import { AppointmentContainer } from "./styleAppoinment";
import Time from "./Time";

const Appointment = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState({
    date: false,
    time: false,
    service: false
  });
  const openHandler = (e, type) => {
    var name = e.target.id;
    // if (e.target.localName === "path") {
    //   if (type === "date") {
    //     name = "date";
    //   }
    // }
    if (name === "date") {
      setOpen({ ...open, date: !open.date });
      console.log(document.getElementById("datePicker"));
      document.getElementById("datePicker").click();
    }
    setOpen({ ...open, [e.target.id]: !open[name] });
  };
  const test = () => {
    const testapi = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const testRes = await callApi(
        "https://api1.karmaagy.com/api/v1/User/LoadTime?Day=2022-07-07",
        "{}",
        myHeaders,
        "GET"
      );
      dispatch(getTime(testRes[0].data))
    };
    testapi();
  };
  return (
    <AppointmentContainer>
      <button onClick={test}>test</button>
      <RowJustifyBetween align="normal">
        <DropDown
          text="Date"
          id="date"
          active={open.date}
          openHandler={openHandler}
        />

        <DropDown
          text="Time"
          id="time"
          active={open.time}
          openHandler={openHandler}
          childComponent={<Time />}
        />
        <DropDown
          text="Services"
          id="service"
          active={open.service}
          openHandler={openHandler}
        />
        <button>Done</button>
      </RowJustifyBetween>
    </AppointmentContainer>
  );
};

export default Appointment;
