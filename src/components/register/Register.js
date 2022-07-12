import React, { useState } from "react";
import { RegisterContainer } from "./styleRegister";
import Image from "next/image";
import registrPic from "../../../public/Assets/images/registrPic.png";
import { RowJustifyBetween } from "../../../styles/globalStyleComponents";
import Input from "../../tools/input/Input";
import SecondlyBtn from "../../tools/secondlyBtn/SecondlyBtn";
import { TypeNumber, validationPhone } from "../../tools/helper";
import { useDispatch, useSelector } from "react-redux";
import { fillInputRegistr } from "../../redux/register/registerActions";
import { useEffect } from "react";
import { notify } from "../../tools/toast/toast";
import callAxios from "../../api/callApi";
import { BASE_URL, LOGIN_SIGNUP } from "../../api/urls";
import callApi from "../../api/callApi";
import { validateRegister } from "./validateRegister";
const Register = () => {
  const state = useSelector((state) => state.stateRegister);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    setErrors(validateRegister(state));
  }, [state]);
  const changeHandler = (e) => {
    console.log(state);
    dispatch(fillInputRegistr(e));
 
    console.log(errors);
  };
  const sendCodeHandler = () => {
    if (!Object.keys(errors).length) {
      const sendCode = async () => {
        const raw = JSON.stringify({
          methodname: 5,
          checkPhoneNumber: {
            phonenumber: state.phoneNumber
          }
        });
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const response = await callApi(
          BASE_URL + LOGIN_SIGNUP,
          raw,
          myHeaders,
          "POST"
        );
        console.log(response);
        if (response.code === 200 || response.code === 201) {
          notify("کد با موفقیت ارسال شد", "success");
        } else {
          notify(
            "قبلا درخواست کد داده اید لطفا 1 دقیقه دیگر تلاش بفرمایید",
            "error"
          );
        }
      };
      sendCode();
    } else {
      notify("لطفا اطلاعات را  کامل وارد کنید", "error");
    }
  };
  return (
    <RegisterContainer>
      <div className="registreForm">
        <h5>Phone number</h5>
        <RowJustifyBetween className="mb">
          <Input
            placeHolder="Enter Phone number"
            valiStatus={errors.number}
            textError={errors.number}
            value={state.phoneNumber}
            change={changeHandler}
            name="phoneNumber"
            legth={11}
            keyDown={(e) => TypeNumber(e)}
          />
          <SecondlyBtn text="Send  Code" onClick={(e) => sendCodeHandler()} />
        </RowJustifyBetween>

        <RowJustifyBetween className="mb">
          <Input
            placeHolder="Enter Code Here"
            valiStatus={errors.code}
            textError={errors.code}
            value={state.code}
            change={changeHandler}
            name="code"
            keyDown={(e) => TypeNumber(e)}
          />
          <SecondlyBtn text="Enter" />
        </RowJustifyBetween>
      </div>
      <div className="registerImg">
        <Image src={registrPic} alt="register image" />
      </div>
    </RegisterContainer>
  );
};

export default Register;
