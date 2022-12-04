import React, { Fragment } from "react";
import { BoxImage, ContainerImage, UnitDiv } from "./styleUnit";
import Image from "next/image";
import { useSelector } from "react-redux";

const Unit = ({ data }) => {
  const lang = useSelector((state) => state.stateLang.lng);

  return (
    <UnitDiv>
      {data.map((item) => {
        return (
          <>
            <div key={item.unit} className="text">
              <h2>{item.unit}</h2>
              <p>{item.description}</p>
            </div>
            <ContainerImage lang={lang}>
              {item.images.map((img, index) => (
                <BoxImage
                  key={img}
                  id={
                    item.images.length === 4
                      ? index * 4
                      : item.images.length === 3
                      ? index * 10
                      : index
                  }
                >
                  <Image src={img} alt="peple" />
                </BoxImage>
              ))}
            </ContainerImage>
          </>
        );
      })}
    </UnitDiv>
  );
};

export default Unit;
