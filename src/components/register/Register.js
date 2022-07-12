import React, { useState } from "react";
import { RegisterContainer } from "./styleRegister";
import Image from "next/image";
import registrPic from "../../../public/Assets/images/registrPic.png";
import { RowJustifyBetween } from "../../../styles/globalStyleComponents";
import Input from "../../tools/input/Input";
import SecondlyBtn from "../../tools/secondlyBtn/SecondlyBtn";
import { TypeNumber, validationPhone } from "../../tools/helper";
import { useDispatch, useSelector } from "react-redux";
import {
  checkOtp,
  fillInputRegistr,
  registerRequest
} from "../../redux/register/registerActions";
import { useEffect } from "react";
import { notify } from "../../tools/toast/toast";
import callAxios from "../../api/callApi";
import { BASE_URL, LOGIN_SIGNUP } from "../../api/urls";
import callApi from "../../api/callApi";
import { validateCode, validateRegister } from "./validateRegister";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Register = () => {
  const router = useRouter();
  const state = useSelector((state) => state.stateRegister);
  const [errors, setErrors] = useState({});
  const [errorsCode, setErrorsCode] = useState({});
  const [focus, setFocus] = useState({});
  const [activeCode, setActiveCode] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setErrors(validateRegister(state));
    setErrorsCode(validateCode(state));
  }, [state]);
  const changeHandler = (e) => {
    dispatch(fillInputRegistr(e));
  };
  const sendCodeHandler = () => {
    if (!Object.keys(errors).length) {
      dispatch(registerRequest(state, setActiveCode));
    } else {
      notify("لطفا اطلاعات را  کامل وارد کنید", "error");
    }
  };
  const codeHandler = () => {
    if (Object.keys(errorsCode).length) {
      notify("لطفا کد را به درستی وارد کنید", "error");
    } else if (Object.keys(errors).length) {
      notify("لطفا ابتدا شماره همراه خود را وارد کنید", "error");
    } else if (!Object.keys(errorsCode).length && !Object.keys(errors).length) {
      dispatch(checkOtp(state, router));
    }
  };
  const focusHandler = (e) => {
    setFocus({ ...focus, [e.target.name]: true });
  };
  return (
    <RegisterContainer>
      <div className="registreForm">
        <h5>Phone number</h5>
        <RowJustifyBetween align="normal" className="mb">
          {console.log(errors.number && focus.phoneNumber)}
          <Input
            placeHolder="Enter Phone number"
            valiStatus={errors.number && focus.phoneNumber}
            textError={errors.number}
            value={state.phoneNumber}
            change={changeHandler}
            name="phoneNumber"
            legth={11}
            keyDown={(e) => TypeNumber(e)}
            onFocus={focusHandler}
          />
          <SecondlyBtn
            text={
              state.phoneLoading ? (
                <CircularProgress
                  sx={{ width: "27px !important", height: "27px !important" }}
                />
              ) : (
                "Send  Code"
              )
            }
            onClick={(e) => sendCodeHandler()}
          />
        </RowJustifyBetween>

        <RowJustifyBetween align="normal" className="mb">
          <Input
            placeHolder="Enter Code Here"
            valiStatus={errorsCode.code && focus.code}
            textError={errorsCode.code}
            value={state.code}
            change={changeHandler}
            name="code"
            legth={6}
            keyDown={(e) => TypeNumber(e)}
            onFocus={focusHandler}
            disabled={activeCode === false && true}
          />
          <SecondlyBtn
            text={
              state.codeLoading ? (
                <CircularProgress
                  sx={{ width: "27px !important", height: "27px !important" }}
                />
              ) : (
                "Enter"
              )
            }
            onClick={codeHandler}
            disabled={activeCode === false && true}
          />
        </RowJustifyBetween>

        <div className="socialMedia">
          <InstagramIcon />
          <WhatsAppIcon sx={{ margin: " 0 1rem" }} />
          <LinkedInIcon />
        </div>
      </div>
      <div className="registerImg">
        <Image src={registrPic} alt="register image" />
      </div>
    </RegisterContainer>
  );
};

export default Register;
