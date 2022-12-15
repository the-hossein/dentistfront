import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import SecondlyBtn from "../secondlyBtn/SecondlyBtn";
import iconG from "../../../public/Assets/images/err.png";
import Image from "next/image";
import Link from "next/link";

const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--backWhite);
  display: grid;
  place-items: center;
  .show {
    width: 40%;
    height: 50%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .img {
      span {
        width: 150px !important;
        height: 150px !important;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    button {
      border: 1px solid var(--whitePen) !important;
      background: inherit;
      font-size: var(--lg-font);
      min-height: 65px;
      min-width: 250px;
      /* color: var(--whitePen) !important; */
      /* transition: all .3s linear; */
      :hover {
        color: var(--darkPen);
        font-weight: 900;
      }
    }
  }
  @media (max-width: 768px) {
    .show {
      width: 100%;
    }
  }
`;

const Error404Page = () => {
  return (
    <MainDiv>
      <div className="show">
        <div className="img">
          <Image src={iconG} alt="logo" />
        </div>
        <h1>Something Happen</h1>
        <Link href="/">
          <SecondlyBtn text={"Go To Home Page"} onClick={() => {}} />
        </Link>
      </div>
    </MainDiv>
  );
};

export default Error404Page;
