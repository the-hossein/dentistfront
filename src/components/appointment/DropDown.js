import React, { useState } from "react";
import { DropDownContainer } from "./styleAppoinment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DatePicker } from "react-advance-jalaali-datepicker";

const DropDown = ({ active, id, openHandler, text,childComponent }) => {
  return (
    <>
      <DropDownContainer
        active={active}
        className={active ? "active" : ""}
        onClick={openHandler}
      >
        <div className="item">
          <div className="title" id={id}>
            <ArrowDropDownIcon sx={{ fontSize: "30pt" }} id={id} />
            <span id={id}> {text}</span>
          </div>
          {id === "date" && (
            <DatePicker
              format="jYYYY/jMM/jDD"
              id="datePicker"
              preSelected={""}
              name="date"
            />
          )}
          {active && <div>{childComponent}</div>}
        </div>
      </DropDownContainer>
    </>
  );
};

export default DropDown;
