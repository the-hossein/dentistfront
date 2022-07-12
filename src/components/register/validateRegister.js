import { validationPhone } from "../../tools/helper";

const validateRegister = (value) => {
  const errorText = {};
  if (!value.phoneNumber) {
    errorText.number = "لطفا شماره خود را وارد کنید";
  } else if (
    validationPhone(value.phoneNumber) === false &&
    value.phoneNumber.length === 11
  ) {
    errorText.number = "شماره وارد شده صحیح نمی باشد";
  } else if (value.phoneNumber.length < 11) {
    errorText.number = "شماره همراه باید 11 رقمی باشد";
  } else delete errorText.number;
  if (!value.code) {
    errorText.code = "لطفا کد 6 رقمی را واارد کنید";
  } else if (
    validationPhone(value.code) === false &&
    value.code.length === 11
  ) {
    errorText.code = "کد با 6 رقمی باشد";
  } else delete errorText.code;
  return errorText;
};
export { validateRegister };
