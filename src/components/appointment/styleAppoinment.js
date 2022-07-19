import styled from "styled-components";
export const AppointmentContainer = styled.div`
  padding: 2rem 0;
  direction: var(--dirRi);
  .active > div {
    border-top-right-radius: 12px 56px !important;
    border-top-left-radius: 12px 56px !important;
    border-bottom-right-radius: 12px 56px !important;
    border-bottom-left-radius: 12px 56px !important;
  }
  .submitBtn {
    width: 90%;
    font-size: var(--md-font);
  }
  .result {
    display: flex;
    flex-direction: column;
    width: 25%;
  }
  .saveGallery {
    background-color: var(--whitePen) !important;
    margin-top: 0.7rem;
  }

  .notify {
    font-size: var(--xs-font);
    padding: 0.5rem;
    text-align: var(--floatLf);
    margin-top: 2rem;
  }
  button,
  .saveGallery {
    background-color: var(--backWhite);
    height: 50px;

    border: none;
    color: var(--darkPen);
    border-radius: var(--inputRadius);
    cursor: pointer;
    &:hover {
      background-color: var(--bluePen) !important;
      color: var(--whitePen);
    }
  }
  @media (max-width: 992px) {
    padding: 3rem 0.5rem;
    .result {
      width: 50%;
    }
  }
  @media (max-width: 450px) {
    .result,
    .submitBtn {
      width: 100%;
    }
  }
`;

export const DropDownContainer = styled.div`
  width: 25%;
  cursor: pointer;
  margin-bottom: 1rem;
  .item {
    font-size: var(--md-font);
    overflow-y: auto;
    overflow-x: hidden;
    width: ${(props) => (props.active ? "99%" : "90%")};
    background-color: var(--backWhite);
    height: ${(props) => (props.active ? "288px" : "50px")};
    /* max-height: ${(props) => (props.active ? "288px" : "50px")}; */

    border-radius: var(--inputRadius);
    position: relative;

    .dateDropDown {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background-color: var(--backWhite);
    }
    label {
      width: 100%;
      margin: 3rem 1rem;
      display: block;
      span {
        font-size: var(--xs-font);
        font-family: var(--fontFamily) !important;
        width: 20px !important;
        height: 20px !important;
        margin: 0 0.3rem;
      }
    }
    .title,
    .dateDropDown {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
    }
    svg {
      position: absolute;
      left: 3px;
    }
  }
  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 450px) {
    width: 100%;
    .item {
      width: ${(props) => (props.active ? "100%" : "100%")};
    }
  }
`;

export const BoxStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > button {
    border: 1px solid var(--bluePen);
    padding: 0.5rem;
    min-width: ${(props) => (props.size === "big" ? "122px" : "90px")};
    max-width: ${(props) => (props.size === "big" ? "100%" : "100%")};

    text-align: center;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    border-radius: 6px;
    &:hover {
      background-color: var(--bluePen);
      color: var(--whitePen);
    }
  }

  .activeItem {
    background-color: var(--bluePen) !important;
    color: var(--whitePen);
  }
  .active {
    background-color: var(--bluePen);
    color: var(--whitePen);
  }
  button:disabled {
    opacity: 50%;
    cursor: no-drop;
    &:hover {
      background-color: var(--backWhite) !important;
      color: var(--darkPen);
    }
  }
  @media (max-width: 572px) {
    > button {
      min-width: ${(props) => (props.size === "big" ? "90%" : "40%")};
    }
  }
  @media (max-width: 450px) {
    > button {
      min-width: ${(props) => (props.size === "big" ? "90%" : "90%")};
    }
  }
`;

export const ResultStyle = styled.div`
  background-color: var(--whitePen);
  padding: 1rem;
  min-height: 210px;
  width: 90%;
  margin-top: 2rem;
  direction: var(--dirRi);
  border-radius: var(--inputRadius);
  p,
  h6 {
    font-weight: normal;
    font-size: var(--sm-font) !important;
  }
  h6 {
    margin: 0.5rem 0 0.3rem 0;
  }
  ul {
    list-style-type: none;
    li {
      font-size: var(--md-font);
      display: flex;
      margin-bottom: 0.6rem;
      :first-child {
        font-weight: bold;
        justify-content: space-between;
      }
    }
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
