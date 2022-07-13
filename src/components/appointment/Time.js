import React from "react";
import { useDispatch } from "react-redux";
import { getTime } from "../../redux/appoinment/appoinmentActions";
import { TimeStyle } from "./styleAppoinment";

const Time = () => {
    const dispatch=useDispatch()
    const timePicker=()=>{
        // dispatch(getTime())
    }
  return (
    <TimeStyle>
      <div onClick={timePicker}> 12 -14</div>
      <div onClick={timePicker}> 12 -14</div>
      <div onClick={timePicker}> 12 -14</div>
      <div onClick={timePicker}> 12 -14</div>
      <div onClick={timePicker}> 12 -14</div>
      <div onClick={timePicker}> 12 -14</div>
      <div onClick={timePicker}> 12 -14</div>
      <div onClick={timePicker}> 12 -14</div>
    </TimeStyle>
  );
};

export default Time;
