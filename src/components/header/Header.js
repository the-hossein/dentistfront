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


const Header = ({ path }) => {
  const lang = useSelector(state => state.stateLang.lng);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  if (typeof window !== "undefined") {
    var root = document.documentElement;
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

  return (
    <HeaderBasic>
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
            <a><li className={path === "About" && "active"}>About Us</li></a>
          </Link>
          <Link href='/contact'>
            <a><li className={path === "Contact" && "active"}>Contact</li></a>
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
      <ButtonRound text={"Login"} />
    </HeaderBasic>
  );
};

export default Header;
