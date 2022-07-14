import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RowJustifyBetween } from "../../../styles/globalStyleComponents";
import callApi from "../../api/callApi";
import {
  getTime,
  setReservation
} from "../../redux/appoinment/appoinmentActions";
import DropDown from "./DropDown";
import Services from "./Services";
import { AppointmentContainer } from "./styleAppoinment";
import Time from "./Time";
import { notify } from "../../tools/toast/toast";
import Result from "./Result";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "react-i18next";

const Appointment = () => {
  if (typeof window !== "undefined") {
    var root = document.documentElement;
    var ls = localStorage.getItem("userToken");
  }
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateAppoinment);
  const user = useSelector((state) => state.stateRegister);

  const [open, setOpen] = useState({
    date: false,
    time: false,
    service: false
  });

  const submitHandler = () => {
    if (
      state.date.date !== "" &&
      state.timeSelected.name !== "" &&
      state.selectedService !== ""
    ) {
      if (ls !== null) {
        const userToken = JSON.parse(ls);

        const token = userToken.token;

        dispatch(setReservation(state, user, token));
      } else {
        notify(t("firstLogin"), "error");
      }
    } else {
      notify(t("compliteData"), "error");
    }
  };
  console.log(open);
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
  useEffect(() => {
    setOpen({ ...open, date: false });
  }, [state.date]);
  console.log(open);
  return (
    <AppointmentContainer>
      <RowJustifyBetween align="normal">
        <DropDown
          text="Date"
          id="date"
          active={open.date}
          openHandler={openHandler}
          dateDrop={() => setOpen({ ...open, date: false })}
          setOpen={setOpen}
          open={open}
        />
        <DropDown
          text="Services"
          id="service"
          active={open.service}
          openHandler={openHandler}
          childComponent={<Services />}
          setOpen={setOpen}
          open={open}
        />
        <DropDown
          text="Time"
          id="time"
          active={open.time}
          openHandler={openHandler}
          childComponent={<Time />}
          setOpen={setOpen}
          open={open}
        />

        <div className="result">
          <button onClick={submitHandler} className="submitBtn">
            {state.loader ? (
              <CircularProgress
                sx={{ width: "27px !important", height: "27px !important" }}
              />
            ) : (
              t("done")
            )}
          </button>
          {state.showResult && <Result />}
        </div>
      </RowJustifyBetween>
    </AppointmentContainer>
  );
};

export default Appointment;
