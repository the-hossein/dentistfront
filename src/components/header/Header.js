import React, { useEffect, useState } from "react";
import {
  HeaderBasic,
  Humber,
  IconDiv,
  MenuSider,
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
import Image from 'next/image';
import Logo from '../../../public/Assets/images/kremLogo.png';


const Header = ({ path }) => {
  const lang = useSelector(state => state.stateLang.lng);
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector((state) => state.stateRegister);

  const [open, setOpen] = useState(false)

  const { t } = useTranslation();

  if (typeof window !== "undefined") {
    var root = document.documentElement;
    var ls = localStorage.getItem("userToken");
  }
  const rightDir = () => {
    root.style.setProperty("--dirRi", "rtl");
    root.style.setProperty("--floatRi", "left");
    root.style.setProperty("--floatLf", "right");
  };
  const leftDir = () => {
    root.style.setProperty("--dirRi", "ltr");
    root.style.setProperty("--floatRi", "right");
    root.style.setProperty("--floatLf", "left");
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
  }, [lang])


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
     
      <IconDiv>
        <Image src={Logo} alt="logo" />
      </IconDiv>
      <Humber open={open} onClick={()=> setOpen(prevOpen=> !prevOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </Humber>
      <MenuSider lang={lang} open={open}>
        <Link href="/">
            <a><li className={path === "Home" && "active"} >
              {t("home")}</li></a>
          </Link>
          <Link href="service">
            <a><li className={path === "Service" && "active"}>{t("service")}</li></a>
          </Link>
          <Link href='/samples'>
            <a><li className={path === "Samples" && "active"}>{t("samples")}</li></a>
          </Link>
          <Link href="/aboutus">
            <a>
              <li className={path === "About" && "active"}>{t("aboutus")}</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li className={path === "Contact" && "active"}>{t("contact")}</li>
            </a>
          </Link>
          <li>
            {
              lang === "en" ? 
              <span onClick={() => changeLng("fa")}>Fa</span> :
              <span onClick={() => changeLng("en")}>En</span> 
            }
          </li>
      </MenuSider>
      <Navbar>
        <UlMenu>
          <Link href="/">
            <a><li className={path === "Home" && "active"} >
              {t("home")}</li></a>
          </Link>
          <Link href="service">
            <a><li className={path === "Service" && "active"}>{t("service")}</li></a>
          </Link>
          <Link href='/samples'>
            <a><li className={path === "Samples" && "active"}>{t("samples")}</li></a>
          </Link>
          <Link href="/aboutus">
            <a>
              <li className={path === "About" && "active"}>{t("aboutus")}</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li className={path === "Contact" && "active"}>{t("contact")}</li>
            </a>
          </Link>
          <li>
            {
              lang === "en" ? 
              <span onClick={() => changeLng("fa")}>Fa</span> :
              <span onClick={() => changeLng("en")}>En</span> 
            }
          </li>
        </UlMenu>
      </Navbar>
      <Link href={state.loginStatus ? "/" : "/register"}>
        <a>
          <ButtonRound
            text={state.loginStatus ? t("logout") : t("login")}
            status={state.loginStatus ? "logout" : "Login"}
            click={state.loginStatus ? logoutHandler : (e) => {}}
          />
        </a>
      </Link>
    </HeaderBasic>
  );
};

export default Header;
