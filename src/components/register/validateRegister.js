import { validationPhone } from "../../tools/helper";

const validateRegister = (value) => {
  const errorText = {};
  if (!value.phoneNumber) {
    errorText.number = "validEnterPhone";
  } else if (
    validationPhone(value.phoneNumber) === false &&
    value.phoneNumber.length === 11
  ) {
    errorText.number = "validIncorrectPhone";
  } else if (value.phoneNumber.length < 11) {
    errorText.number = "validLength11";
  } else delete errorText.number;
  //   if (!value.code) {
  //     errorText.code = "لطفا کد 6 رقمی را وارد کنید";
  //   } else if (
  //     validationPhone(value.code) === false &&
  //     value.code.length === 11
  //   ) {
  //     errorText.code = "کد با 6 رقمی باشد";
  //   } else delete errorText.code;
  return errorText;
};
const validateCode = (value) => {
  const errorCode = {};

  if (!value.code) {
    errorCode.code = "validEnterCode";
  } else if (value.code.length < 6) {
    errorCode.code = "validLengthCode6";
  } else delete errorCode.code;
  return errorCode;
};
export { validateRegister, validateCode };
