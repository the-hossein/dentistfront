import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTime,
  getTime,
  getTimeState
} from "../../redux/appoinment/appoinmentActions";
import Loader from "../../tools/loader/Loader";
import { BoxStyle } from "./styleAppoinment";

const Time = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateAppoinment);
  const [userSelect, setUserSelect] = useState(null);
  console.log(state);
  const timePicker = (e) => {
    dispatch(addTime(e.target.name, e.target.value));
    setUserSelect(e.target.name);

    console.log(userSelect === state.timeSelected.name);
  };
  // useEffect(() => {
  //   if (state.date.date === "") {
  //     var currentTime = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

  //     dispatch(getTimeState(currentTime));
  //   }
  // }, []);
  return state.timeLoader ? (
    <Loader />
  ) : (
    <BoxStyle>
      {state.noTime ? (
        <p className="notify">{t("notime")}</p>
      ) : (state.date.date === "" && state.selectedService.value === "" ||
        state.date.date === "" ||
        state.selectedService.value === "" )? (
        <p className="notify">{t("selectService")}</p>
      ) : (
        state.time.map((item) => (
          <>
            <button
              onClick={timePicker}
              disabled={item.state === false && true}
              name={item.time}
              value={item.num}
              // className={state.timeSelected.name===userSelect&&"activeItem"}
            >
              {item.time}
            </button>
          </>
        ))
      )}
    </BoxStyle>
  );
};

export default Time;
