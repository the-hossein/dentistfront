import React from "react";
import {
  HeaderBasic,
  Navbar,
  UlMenu
} from "../../../styles/globalStyleComponents";
import ButtonRound from "../../tools/buttonRound/ButtonRound";

const Header = ({ path }) => {

  const setActive = (event, target) => {
    const text = event.target.innerText;
    if(text === target){
      console.log("worked")
      return "active"
    }else{
      console.log("not worked")
    }
  }

  return (
    <HeaderBasic>
      <Navbar>
        <UlMenu>
          <li className={path === "Home" && "active"} >Home</li>
          <li className={path === "Service" && "active"}>Service</li>
          <li className={path === "Samples" && "active"}>Samples</li>
          <li className={path === "About" && "active"}>About Us</li>
          <li className={path === "Contact" && "active"}>Contact</li>
        </UlMenu>
      </Navbar>
      <ButtonRound text={"Login"} />
    </HeaderBasic>
  );
};

export default Header;
