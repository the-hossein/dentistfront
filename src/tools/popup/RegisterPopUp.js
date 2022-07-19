import React, { useEffect, useState } from "react";
import { PopUpStyle } from "./styleRegister";
import Input from "../input/Input";
import SecondlyBtn from "../secondlyBtn/SecondlyBtn";
import {
  validateCode,
  validateRegister
} from "../../components/register/validateRegister";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";

import {
  checkOtp,
  closePopup,
  fillInputRegistr,
  registerRequest
} from "../../redux/register/registerActions";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { TypeNumber } from "../helper";
import { notify } from "../toast/toast";
import { useTranslation } from "react-i18next";
const RegisterPopUp = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [errorsCode, setErrorsCode] = useState({});
  const [focus, setFocus] = useState({});
  const [activeCode, setActiveCode] = useState(false);
  const { t } = useTranslation();
  const state = useSelector((state) => state.stateRegister);
  const lang = useSelector((state) => state.stateLang.lng);

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
      dispatch(registerRequest(state, setActiveCode, lang));
    } else {
      notify(t("completeData"), "error");
    }
  };
  const codeHandler = () => {
    if (Object.keys(errorsCode).length) {
      notify(t("enterCorrectCode"), "error");
    } else if (Object.keys(errors).length) {
      notify(t("firstEnterPhone"), "error");
    } else if (!Object.keys(errorsCode).length && !Object.keys(errors).length) {
      dispatch(checkOtp(state, router, lang));
    }
  };
  const focusHandler = (e) => {
    setFocus({ ...focus, [e.target.name]: true });
  };
  const closeHandler = () => {
    dispatch(closePopup());
    setActiveCode(false);
  };
  return (
    state.popup && (
      <PopUpStyle>
        <div className="popup">
          <CloseIcon
            sx={{ float: "right", margin: "0 0 1rem 0", fontSize: 18 }}
            onClick={closeHandler}
          />
          {!activeCode ? (
            <>
              <Input
                placeHolder={t("plcNumberPhone")}
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
                size="small"
                text={
                  state.phoneLoading ? (
                    <CircularProgress
                      sx={{
                        width: "27px !important",
                        height: "27px !important"
                      }}
                    />
                  ) : (
                    t("SendCode")
                  )
                }
                onClick={(e) => sendCodeHandler()}
              />
            </>
          ) : (
            <>
              <Input
                placeHolder={t("enterCodeHere")}
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
                size="small"
                text={
                  state.codeLoading ? (
                    <CircularProgress
                      sx={{
                        width: "27px !important",
                        height: "27px !important"
                      }}
                    />
                  ) : (
                    t("enter")
                  )
                }
                onClick={codeHandler}
              />
            </>
          )}
        </div>
      </PopUpStyle>
    )
  );
};

export default RegisterPopUp;
