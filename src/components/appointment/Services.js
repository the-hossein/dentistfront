import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addService } from "../../redux/appoinment/appoinmentActions";
import { BoxStyle } from "./styleAppoinment";
import { useSelector } from "react-redux";

const Services = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const state = useSelector((state) => state.stateAppoinment);

  const [userSelect, setUserSelect] = useState(state.selectedService.value);
  const allServices = [
    { type: "Implants", name: 0 },
    { type: "Orthodontics", name: 1 },
    { type: "Bridges", name: 2 },
    { type: "Endo", name: 3 },
    { type: "Veneers", name: 4 },
    { type: "Fillings", name: 5 },
    { type: "Dental cleanings", name: 6 },
    { type: "Dental Laminate", name: 7 },
    { type: "Composite", name: 8 }
  ];
  const selectHandler = (e) => {
    setUserSelect(e.target.name);
    dispatch(addService(e.target.value, e.target.name));
  };
  return (
    <BoxStyle size="big">
      {allServices.map((item) => (
        <>
          <button onClick={selectHandler} name={item.name} value={item.type}  className={userSelect === item.type&&"activeItem"}>
            {t(`${item.type}`)}
          </button>
        </>
      ))}
    </BoxStyle>
  );
};

export default Services;
