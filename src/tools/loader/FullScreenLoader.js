import React from "react";
import { ScreenLoader } from "./styleLoader";
import Image from "next/image";
import loader from "../../../public/assets/images/loader.gif";
import { useSelector } from "react-redux";
const FullScreenLoader = () => {

  return (

      <ScreenLoader>
        <Image src={loader} alt="loader" />
      </ScreenLoader>
    
  );
};

export default FullScreenLoader;
