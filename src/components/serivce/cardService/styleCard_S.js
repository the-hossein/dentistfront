import styled from "styled-components";

export const Card = styled.div`
  margin-right: ${(props) => (props.lang === "fa" ? "" : "4rem")};
  margin-left: ${(props) => (props.lang !== "fa" ? "" : "4rem")};
  width: 33%;
  height: 55vh;
  border-radius: var(--inputRadius);
  overflow: hidden;
  position: relative;
  transition: all 0.3s linear;
  span {
    width: 100% !important;
    height: 100% !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    z-index: 2 !important;
    img {
      object-fit: cover;
    }
  }

  .name {
    background-color: #fff;
    color: var(--darkPen);
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 5;
    min-width: 150px;
    width: fit-content;
    padding: 1rem 0.5rem;
    font-size: var(--lg-font);
    border-radius: var(--inputRadius);
    transform-origin: 2px;
    transform: rotateZ(-90deg);
    text-align: center;

    background: rgba(255, 255, 255, 0.46);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.2px);
    -webkit-backdrop-filter: blur(9.2px);
    cursor: pointer;
    font-weight: 700;
    transition: all 0.3s linear;
  }

  &:hover {
    width: 55%;
    .name {
      transform: rotateZ(0) translateX(-50%);
      bottom: 3rem;
    }
  }

  @media (max-width: 1103px) {
    .name {
      width: 130px;
      font-size: var(--md-font);
    }
  }
  @media (max-width: 960px) {
    .name {
      width: 100px;
    }
  }
  @media (max-width: 868px) {
    width: 100%;
    height: 50vh;
    margin-bottom: 2rem;
    margin-right: ${(props) => (props.lang === "fa" ? "" : "0")};
    margin-left: ${(props) => (props.lang !== "fa" ? "" : "0")};
    .name {
      transform: rotateZ(0) translateX(-50%);
      bottom: 3rem;
    }
    &:hover {
      width: 100%;
    }
  }
`;
