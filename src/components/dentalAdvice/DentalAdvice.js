import React, { useState } from "react";
import { DivContainer, MainSection, TextContainer } from "./styleAdvice";
import Image from "next/image";
import banner from "../../../public/Assets/images/tst_pic_1.jpg";
import { useTranslation } from "react-i18next";
import Input from "../../tools/input/Input";
import SecondlyBtn from "../../tools/secondlyBtn/SecondlyBtn";
import {
  TypeNumber,
  TypepersianNumber,
  validationName,
  validationPhone,
} from "../../tools/helper";
import { notify } from "../../tools/toast/toast";
import { CircularProgress } from "@mui/material";
import callApi from "../../api/callApi";
import { BASE_URL, SET_DENTAL_ADVICE } from "../../api/urls";
import { useSelector } from "react-redux";
import KarmaPn from "../../tools/pn/KarmaPn";

const DentalAdvice = () => {
  const [phone, setPhone] = useState("");

  const [name, setName] = useState("");

  const [service, setService] = useState(15);

  const [loader, setLoader] = useState(false);

  const lang = useSelector((state) => state.stateLang.lng);

  const { t } = useTranslation();

  const phoneHandler = (e) => {
    if (e.target.value.length <= 11) {
      setPhone(TypepersianNumber(e.target.value));
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const fetchinData = () => {
    if (window.localStorage.getItem("userToken") === null) {
      notify(t("errToken"), "error");
    } else {
      if (validationName(name) || !validationPhone(phone) || service === 15) {
        notify(t("errForm"), "error");
      } else {
        setLoader(true);
        let token = JSON.parse(window.localStorage.getItem("userToken")).token;
        var raw = JSON.stringify({
          name: name,
          phonenumber: phone,
          service: +service,
        });
        console.log(JSON.parse(raw));

        const method = "POST";

        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        const fetcher = async () => {
          const data = await callApi(
            BASE_URL + SET_DENTAL_ADVICE,
            raw,
            headers,
            "POST"
          );
          if (data[0].code === 200) {
            setLoader(false);
            notify(t("successAdvice"), "success");
            setPhone("");
            setName("");
            setService("");
          }
        };

        fetcher();
      }
    }
  };

  const allServices = [
    { type: "Pediatricdentistry", name: 0 },
    { type: "Orthodontics", name: 1 },
    { type: "Teethbleaching", name: 2 },
    { type: "Rootcanal", name: 3 },
    { type: "Prosthesisandcover", name: 4 },
    { type: "Implant", name: 5 },
    { type: "Gumsurgery", name: 6 },
    { type: "Oralsurgery", name: 7 },
    { type: "Frenectomysurgery", name: 8 },
    { type: "Dentallaminate", name: 9 },
    { type: "Composite", name: 10 },
  ];

  return (
    <MainSection>
      <DivContainer lang={lang}>
        <TextContainer>
          <h1>{t("dentalAdvice")}</h1>
          <p>{t("dentalAdviceDescription")}</p>
          <div className="input">
            <label>{t("name")}</label>
            <Input
              type={"text"}
              value={name}
              change={nameHandler}
              textError={t("errName")}
            //   valiStatus={validationName(name)}
            />
          </div>
          <div className="input">
            <label>{t("phone")}</label>
            <Input
              type={"text"}
            //   valiStatus={!validationPhone(phone)}
              value={phone}
              change={phoneHandler}
              keyDown={(e) => TypeNumber()}
              textError={t("errorPhone")}
            />
          </div>
          <div className="input">
            <label>{t("service")}</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {allServices.map((item) => (
                <option key={item.name} value={item.name}>
                  {t(item.type)}
                </option>
              ))}
              <option value={15} className="hide-option">
                {t("choseService")}
              </option>
            </select>
            {/* <Input 
                            type={"text"}
                            value={service}
                            change={(e) => setService(e.target.value)}
                        /> */}
          </div>
          <div className="btn">
            <SecondlyBtn
              text={
                loader ? (
                  <CircularProgress
                    sx={{ width: "27px !important", height: "27px !important" }}
                  />
                ) : (
                  t("done")
                )
              }
              onClick={fetchinData}
            />
          </div>

          <KarmaPn />
        </TextContainer>
        <div className="image">
          <Image src={banner} alt="banner" />
        </div>
      </DivContainer>
    </MainSection>
  );
};

export default DentalAdvice;
