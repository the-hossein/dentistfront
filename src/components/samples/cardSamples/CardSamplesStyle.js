import styled from "styled-components";

export const Card = styled.div`
  min-height: 55vh;
  min-width: 155px;
  width: 22.5%;
  position: relative;
  overflow: hidden;
  border-radius: var(--inputRadius);
  margin-bottom: 1.5rem;
  margin-right: ${(props) => (props.lang === "fa" ? "0" : "1.5rem")};
  margin-left: ${(props) => (props.lang !== "fa" ? "0" : "1.5rem")};
  span {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: auto !important;
    bottom: auto !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 2 !important;
  }
  img {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: auto !important;
    bottom: auto !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 2 !important;
    z-index: 2 !important;
    object-fit: cover;
  }
  .showCase {
    width: 70%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #fff;
    padding: 1rem 2rem;
    font-size: var(--lg-font);
    text-align: center;
    z-index: 5;
    bottom: 30px;
    left: 50%;
    border-radius: var(--inputRadius);
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.46);
    /* border-radius: 16px; */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.2px);
    -webkit-backdrop-filter: blur(9.2px);
    cursor: pointer;
    font-weight: 700;
  }
  @media (max-width: 1131px) {
    min-width: 120px;
    width: 30%;
    .showCase {
      font-size: var(--md-font);
      padding: 1rem 1rem;
    }
  }

  @media (max-width: 978px) {
    margin-right: 0 !important;
    margin-left: 0 !important;
    min-width: 45%;
    height: 35vh;
    :nth-child(even) {
      margin-top: 5rem;
    }
  }
  @media (max-width: 461px) {
    .showCase {
      padding: 0.8rem 1rem;
      font-size: var(--xs-font);
    }
    height: 35vh;
  }
`;
