import React from "react";
import { Card } from "./styleCard_S";
import Image from "next/image";
import Link from "next/link";

const CardService = ({ title, lang, img, id }) => {
  return (
    <Card lang={lang}>
      <Image src={img} alt="service" />
      <div className="name"><Link href={`/service/${id}`}>
        <a>{title}</a>
      </Link></div>
    </Card>
  );
};

export default CardService;
