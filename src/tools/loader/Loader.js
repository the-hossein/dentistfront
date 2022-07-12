import React from "react";
import Image from "next/image";
import loader from "../../../public/Assets/images/loader.gif";
const Loader = () => {
  return (
    <div className={style.loader}>
      <Image src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
