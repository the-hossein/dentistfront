import React from "react";
import { RegisterContainer } from "./styleRegister";
import Image from "next/image";
import registrPic from "../../../public/Assets/images/registrPic.png";
import { RowJustifyBetween } from "../../../styles/globalStyleComponents";
import Input from "../../tools/input/Input";
import SecondlyBtn from "../../tools/secondlyBtn/SecondlyBtn";
const Register = () => {
  return (
    <RegisterContainer>
      <div className="registreForm">
        <RowJustifyBetween>
          <Input />
          <SecondlyBtn />
        </RowJustifyBetween>
        <RowJustifyBetween>
          <Input />
          <SecondlyBtn />
        </RowJustifyBetween>
      </div>
      <div className="registerImg">
        <Image src={registrPic} alt="register image" />
      </div>
    </RegisterContainer>
  );
};

export default Register;
