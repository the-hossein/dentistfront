import React from "react";
import {
  HeaderBasic,
  Navbar,
  UlMenu
} from "../../../styles/globalStyleComponents";
import ButtonRound from "../../tools/buttonRound/ButtonRound";
import Link from "next/link";

const Header = ({ path }) => {

  return (
    <HeaderBasic>
      <Navbar>
        <UlMenu>
          <Link href="/">
            <a><li className={path === "Home" && "active"} >Home</li></a>
          </Link>
          <li className={path === "Service" && "active"}>Service</li>
          <li className={path === "Samples" && "active"}>Samples</li>
          <Link href="/aboutus">
            <a><li className={path === "About" && "active"}>About Us</li></a>
          </Link>
          <li className={path === "Contact" && "active"}>Contact</li>
        </UlMenu>
      </Navbar>
      <ButtonRound text={"Login"} />
    </HeaderBasic>
  );
};

export default Header;
