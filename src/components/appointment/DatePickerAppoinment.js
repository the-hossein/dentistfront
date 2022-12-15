import React from 'react';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DatePicker } from "react-advance-jalaali-datepicker";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import {
  getDate,
  getTimeState
} from "../../redux/appoinment/appoinmentActions";
import { convertISOS } from "../../tools/helper";
import { useTranslation } from "react-i18next";

const DatePickerAppoinment = () => {
  const {t}=useTranslation()
  const chaneDateHandler = (timestamp, miladi) => {
    
    dispatch(getDate(miladi, timestamp));
  };
  var currentTime = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

  return (
    <>
          
    <FormControlLabel
  
      control={<Checkbox />}
      label={t("firstReservation")}
      labelPlacement={t("firstReservation")}
      onChange={() => setFirstTime(!firstTime)}
      
    />
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
  )
}

export default DatePickerAppoinment