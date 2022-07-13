import React, { useEffect } from "react";
import {
  HeaderBasic,
  Navbar,
  UlMenu
} from "../../../styles/globalStyleComponents";
import ButtonRound from "../../tools/buttonRound/ButtonRound";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import i18next from "i18next";
import { changeLang } from '../../redux/lang/langAction';
import {
  getProfile,
  loginStatusFalse,
  loginStatusTrue,
  logout
} from "../../redux/register/registerActions";
import { notify } from "../../tools/toast/toast";
import { useRouter } from "next/router";
import FullScreenLoader from "../../tools/loader/FullScreenLoader";


const Header = ({ path }) => {
  const lang = useSelector(state => state.stateLang.lng);
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector((state) => state.stateRegister);

  const { t } = useTranslation();

  if (typeof window !== "undefined") {
    var root = document.documentElement;
    var ls = localStorage.getItem("userToken");
  }
  const rightDir = () => {
    root.style.setProperty("--dirRi", "rtl");
  };
  const leftDir = () => {
    root.style.setProperty("--dirRi", "ltr");
  };

  const changeLng = (lng) => {
    dispatch(changeLang(lng));
    i18next.changeLanguage(lng);
    if (lng === "en") {
      leftDir();
    } else {
      rightDir();
    }
  };

  useEffect(()=> {
    dispatch(changeLang(Cookies.get("i18next")));
    
    const lngCookie = Cookies.get("i18next");

    if (lngCookie === undefined) {
      dispatch(changeLang("fa"));
      i18next.changeLanguage("fa");
      rightDir();
    }
    if (lngCookie === "en") {
      leftDir();
    } else {
      rightDir();
    }

  }, [])


// const Header = ({ path }) => {
  
  // const dispatch = useDispatch();
  // if (typeof window !== "undefined") {
  //   var root = document.documentElement;
    
  // }

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
    dispatch(logout());
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
            <a><li className={path === "Home" && "active"} >
              {t("home")}</li></a>
          </Link>
          <li className={path === "Service" && "active"}>Service</li>
          <Link href='/samples'>
            <a><li className={path === "Samples" && "active"}>Samples</li></a>
          </Link>
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
          <li>
            {
              lang === "en" ? 
              <span onClick={() => changeLng("fa")}>En</span> :
              <span onClick={() => changeLng("en")}>Fa</span> 
            }
          </li>
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
