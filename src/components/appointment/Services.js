import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addService } from "../../redux/appoinment/appoinmentActions";
import { BoxStyle } from "./styleAppoinment";

const Services = () => {
  const dispatch = useDispatch();
  const allServices = [
    { type: "Implants", name: 0 },
    { type: "Orthodontics", name: 1 },
    { type: "Bridges", name: 2 },
    { type: "Endo", name: 3 },
    { type: "Veneers", name: 4 },
    { type: "Fillings", name: 5 },
    { type: "Dental cleanings", name: 6 },
    { type: "Dental Laminate", name: 7 },
    { type: "composite", name: 8 }
  ];
  const selectHandler = (e) => {
    dispatch(addService(e.target.value, e.target.name));
  };
  return (
    <BoxStyle size="big">
      {allServices.map((item) => (
        <>
          <button onClick={selectHandler} name={item.name} value={item.type}>
            {item.type}
          </button>
        </>
      ))}
    </BoxStyle>
  );
};

export default Services;
