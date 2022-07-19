import React from "react";
import { Card } from "./styleCard_S";
import Image from "next/image";

const CardService = ({ title, lang, img }) => {
  return (
    <Card lang={lang}>
      <Image src={img} alt="service" />
      <div className="name">{title}</div>
    </Card>
  );
};

export default CardService;
