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
    { type: "Pediatricdentistry", name: 0 },
    { type: "Orthodontics", name: 1 },
    { type: "Teethbleaching", name: 2 },
    { type: "Rootcanal", name: 3 },
    { type: "Prosthesisandcover", name: 4 },
    { type: "Implant", name: 5 },
    { type: "Gumsurgery", name: 6 },
    { type: "Oralsurgery", name: 7 },
    { type: "Frenectomysurgery", name: 8 },
    { type: "Dentallaminate", name: 9 },
    { type: "Composite", name: 10 }
  ];
  const selectHandler = (e) => {
    setUserSelect(e.target.name);
    dispatch(addService(e.target.value, e.target.name));
  };
  return (
    <BoxStyle size="big">
      {allServices.map((item) => (
        <>
          <button
            onClick={selectHandler}
            name={item.name}
            value={item.type}
            className={userSelect === item.type && "activeItem"}
          >
            {t(`${item.type}`)}
          </button>
        </>
      ))}
    </BoxStyle>
  );
};

export default Services;
