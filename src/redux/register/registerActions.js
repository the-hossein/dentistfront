import callApi from "../../api/callApi";
import { BASE_URL, CHECK_OTP, GET_PROFILE, LOGIN_SIGNUP } from "../../api/urls";
import { notify } from "../../tools/toast/toast";

if (typeof window !== "undefined") {
  var ls = localStorage.getItem("userToken");
}
export const fillInputRegistr = (e) => {
  return {
    type: "FILL_INPUT_REGISTER",
    e: e
  };
};
export const loginStatusTrue = () => {
  return {
    type: "LOGIN_STATUS_TRUE"
  };
};
export const openPopup = () => {
  return {
    type: "OPEN_POPUP"
  };
};
export const closePopup = () => {
  return {
    type: "CLOSE_POPUP"
  };
};
export const loginStatusFalse = () => {
  return {
    type: "LOGIN_STATUS_FALSE"
  };
};
export const preloadRegister = (name) => {
  return {
    type: "PRELOAD_REGISTER",
    name: name
  };
};
export const pausepreloadRegister = (name) => {
  return {
    type: "PAUSE_PRELOAD_REGISTER",
    name: name
  };
};
export const registerRequest = (state, setActiveCode, lang) => {
  return (dispatch) => {
    dispatch(preloadRegister("phoneLoading"));
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
      if (response[0].code === 200 || response[0].code === 201) {
        let text = "";
        if (lang === "fa") {
          text = "کد با موفقیت ارسال شد";
        } else {
          text = "Code sent successfully";
        }

        notify(text, "success");
        setActiveCode(true);
        dispatch(pausepreloadRegister("phoneLoading"));
      } else {
        dispatch(pausepreloadRegister("phoneLoading"));
        let text = "";
        if (lang === "fa") {
          text = "قبلا درخواست کد داده اید لطفا 1 دقیقه دیگر تلاش بفرمایید";
        } else {
          text =
            "You have already requested a code, please try again in 1 minute";
        }
        notify(text, "error");
      }
    };
    sendCode();
  };
};

export const checkOtp = (state, router, lang) => {
  return (dispatch) => {
    dispatch(preloadRegister("codeLoading"));

    const registerUser = async () => {
      const raw = JSON.stringify({
        methodname: 2,
        otpCheck: {
          phoneNumber: state.phoneNumber,
          code: state.code,
          referralSite: "string",
          type: 0
        }
      });
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const response = await callApi(
        BASE_URL + CHECK_OTP,
        raw,
        myHeaders,
        "POST"
      );
      console.log(response);
      if (response[0].code === 201) {
        dispatch(loginStatusTrue());
        var text = "";
        if (lang === "fa") {
          text = "شما با موفقیت ثبت نام شدید";
        } else {
          text = "You have successfully registered";
        }
        notify(text, "success");
        const data = {
          token: response[0].data.token,
          exp: response[0].data.expiration,
          phone: state.phoneNumber
        };

        localStorage.setItem("userToken", JSON.stringify(data));
        if (router.pathname !== "/appointment") {
          router.push({
            pathname: "/"
          });
        }
        dispatch(pausepreloadRegister("codeLoading"));
      } else if (response[0].code === 200) {
        dispatch(loginStatusTrue());
        var textMess = "";
        if (lang === "fa") {
          textMess = "شما با موفقیت وارد حساب خود شدید";
        } else {
          textMess = "You have successfully logged into your account";
        }
        notify(textMess, "success");
        const data = {
          token: response[0].data.token,
          exp: response[0].data.expiration,
          phone: state.phoneNumber
        };

        localStorage.setItem("userToken", JSON.stringify(data));
        if (router.pathname !== "/appointment") {
          router.push({
            pathname: "/"
          });
        }
        dispatch(pausepreloadRegister("codeLoading"));
      } else {
        dispatch(pausepreloadRegister("codeLoading"));
        var Mess = "";
        if (lang === "fa") {
          Mess = "کد وارد شده اشتباه است";
        } else {
          Mess = "The entered code is incorrect";
        }
        notify(Mess, "error");
      }
    };
    registerUser();
  };
};

const userData = (user) => {
  return {
    type: "USER_DATA",
    user: user
  };
};

const userDataLoader = () => {
  return {
    type: "USER_DATA_LOADER"
  };
};
export const logout = () => {
  return {
    type: "LOGOUT"
  };
};
export const getProfile = () => {
  return (dispatch) => {
    dispatch(userDataLoader());
    ls = localStorage.getItem("userToken");
    const userToken = JSON.parse(ls);
    var phone = userToken.phone;
    var token = userToken.token;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    const profile = async () => {
      var raw = JSON.stringify({
        phonenumber: `${phone}`
      });

      try {
        const user = await callApi(
          BASE_URL + GET_PROFILE,
          raw,
          myHeaders,
          "POST"
        );
        if (user[0].code === 200 && user[0].data !== null) {
          dispatch(userData(user[0].data));
        } else {
          dispatch(loginStatusFalse());
        }
      } catch {
        dispatch(loginStatusFalse());
      }
    };
    profile();
  };
};
