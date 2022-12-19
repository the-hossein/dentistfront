import React from "react";
import { Card } from "./styleCard_S";
import Image from "next/image";
import Link from "next/link";

const CardService = ({ title, lang, img, id }) => {
  return (
    <Card lang={lang}>
      <Image src={img} alt="service" />
      {console.log(img)}
      <Link href={`/service/${id}`}>
        <a>
          <div className="name">{title}</div>
        </a>
      </Link>
    </Card>
  );
};

export default CardService;
