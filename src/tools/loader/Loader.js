import React from "react";
import Image from "next/image";
import loader from "../../../public/assets/images/loader.gif";
const Loader = () => {
  return (
    <div >
      <Image src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
