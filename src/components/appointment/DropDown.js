import React, { useEffect, useState } from "react";
import { DropDownContainer } from "./styleAppoinment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DatePicker } from "react-advance-jalaali-datepicker";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import SquareIcon from '@mui/icons-material/Square';
import {
  getDate,
  getTimeState
} from "../../redux/appoinment/appoinmentActions";
import { convertISOS } from "../../tools/helper";
import { useTranslation } from "react-i18next";
import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import callApi from "../../api/callApi";
import { BASE_URL, GET_FIRST_TIME } from "../../api/urls";

const DropDown = ({ active, id, openHandler, text, childComponent }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateAppoinment);
  const [firstTime, setFirstTime] = useState(false);
  const { t } = useTranslation();
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
  useEffect(() => {
    if (firstTime && state.selectedService.name !== "") {

      const getFirstTimeReservation=async()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
const response=await callApi(`${BASE_URL+GET_FIRST_TIME}?Service=${state.selectedService.name}`,"{}",myHeaders,"GET")
console.log(response)
      }
      getFirstTimeReservation()
    }
  }, [firstTime, state.selectedService]);
  var currentTime = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  const handleChange = (event) => {
    setFirstTime(event.target.checked);
  };
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

            {/* {
              active&&   
              <FormControlLabel


              control={<Checkbox checked={firstTime} onChange={handleChange} icon={<SquareIcon sx={{color:"var(--whitePen)",borderRadius:"6px"}}/>	}/>}
              label={t("firstReservation")}
              labelPlacement={t("firstReservation")}

            />
            } */}
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
