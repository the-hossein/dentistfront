import React, { useEffect, useState } from "react";
import { DropDownContainer } from "./styleAppoinment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DatePicker } from "react-advance-jalaali-datepicker";
import { useDispatch, useSelector } from "react-redux";
import {
  getDate,
  getTimeState
} from "../../redux/appoinment/appoinmentActions";
import { convertISOS } from "../../tools/helper";

const DropDown = ({ active, id, openHandler, text, childComponent }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateAppoinment);

  const chaneDateHandler = (timestamp, miladi) => {
    dispatch(getDate(miladi, timestamp));
  };
  useEffect(() => {
    if (state.selectedService.name !== "" && state.date.date) {
      dispatch(
        getTimeState(
          convertISOS(state.date.timestamp).slice(0, 10),
          state.selectedService.name
        )
      );
    }
  }, [state.selectedService, state.date]);
  var currentTime = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  return (
    <>
      <DropDownContainer
        active={active}
        className={active ? "active" : ""}
        onClick={openHandler}
      >
        <div className="item">
          {id === "date" ? (
            <>
              <DatePicker
                format="jYYYY/jMM/jDD"
                id={"datePicker"}
                preSelected={currentTime}
                onChange={chaneDateHandler}
                name="date"
                placeholder={"Date"}
              />
              <div className="dateDropDown" id={id}>
                <ArrowDropDownIcon sx={{ fontSize: "30pt" }} id={id} />
                <span id={id}>{text}</span>
              </div>
            </>
          ) : (
            <div className="title" id={id}>
              <ArrowDropDownIcon sx={{ fontSize: "30pt" }} id={id} />
              <span id={id}> {text}</span>
            </div>
          )}

          {active && <div>{childComponent}</div>}
        </div>
      </DropDownContainer>
    </>
  );
};

export default DropDown;
