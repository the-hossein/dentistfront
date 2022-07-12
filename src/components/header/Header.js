import React, { useEffect } from "react";
import {
  HeaderBasic,
  Navbar,
  UlMenu
} from "../../../styles/globalStyleComponents";
import ButtonRound from "../../tools/buttonRound/ButtonRound";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  loginStatusFalse,
  loginStatusTrue
} from "../../redux/register/registerActions";
import { notify } from "../../tools/toast/toast";
import { useRouter } from "next/router";
import FullScreenLoader from "../../tools/loader/FullScreenLoader";

const Header = ({ path }) => {
  const router = useRouter();
  const state = useSelector((state) => state.stateRegister);
  const dispatch = useDispatch();
  if (typeof window !== "undefined") {
    var root = document.documentElement;
    var ls = localStorage.getItem("userToken");
  }

  useEffect(() => {
    if (ls !== null) {
      dispatch(loginStatusTrue());
      const getApi = async () => {
        dispatch(await getProfile());
      };
      getApi();
      const userToken = JSON.parse(ls);
      const tokenExp = userToken.exp;
      const token = userToken.token;
      const phone = userToken.phone;

      const now = new Date();
      const endDate = new Date(tokenExp);
      if (endDate - now < 0) {
        localStorage.removeItem("userToken");
        dispatch(loginStatusFalse());
      }
    } else {
      dispatch(loginStatusFalse());
    }
  }, [state.loginStatus]);
  const logoutHandler = () => {
    localStorage.removeItem("userToken");
    dispatch(loginStatusFalse());
    router.push({
      pathname: "/"
    });
    notify("از حساب کاربری خود خارج شدید", "success");
  };
  return (
    <HeaderBasic>
      {state.userDataLoader && <FullScreenLoader />}
      <Navbar>
        <UlMenu>
          <Link href="/">
            <a>
              <li className={path === "Home" && "active"}>Home</li>
            </a>
          </Link>
          <li className={path === "Service" && "active"}>Service</li>
          <li className={path === "Samples" && "active"}>Samples</li>
          <Link href="/aboutus">
            <a>
              <li className={path === "About" && "active"}>About Us</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li className={path === "Contact" && "active"}>Contact</li>
            </a>
          </Link>
        </UlMenu>
      </Navbar>
      <Link href={state.loginStatus ? "/" : "/register"}>
        <a>
          <ButtonRound
            text={state.loginStatus ? "logout" : "Login"}
            status={state.loginStatus ? "logout" : "Login"}
            click={state.loginStatus ? logoutHandler : (e) => {}}
          />
        </a>
      </Link>
    </HeaderBasic>
  );
};

export default Header;
