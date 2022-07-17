import styled from "styled-components";
export const RowJustifyBetween = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  justify-content: space-between;
  flex-wrap: ${(props) => (props.noWarp ? "nowrap" : "wrap")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  .child-col {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .col {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    button {
      margin-bottom: 2rem !important;
    }
  }

  @media (max-width: 698px) {
    .col {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 534px) {
    flex-direction: ${(props) => (props.footer ? "column" : "")};
    align-items: ${(props) => props.footer && "flex-start"};
    div {
      margin-bottom: ${(props) => props.footer && "1rem"};
    }
  }
`;

export const RowJustifyBetweenHome = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  justify-content:${(props) => (props.justify ? props.justify : "space-between")} ;
  align-items: ${(props) => (props.align ? props.align : "center")};
  .child-col {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .col-text {
    width: 50%;
    padding: 0 4rem;
  }
  .col {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    button {
      margin-bottom: 2rem !important;
    }
  }
  @media (max-width: 1156px) {
    .col-text {
      width: 40%;
      padding: 0 2rem;
      font-size: var(--xs-font);
    }
  }
  @media (max-width: 1006px) {
    .col-text {
      width: 40%;
      padding: 0;
      font-size: var(--xs-font);
    }
  }
  
  @media (max-width: 796px) {
    flex-direction: column;
    .col {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }
    .col-text {
      justify-content: center;
      align-items: center;
    }
  }
`;

export const RowJustifyStart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// export const HeaderBasic = styled.header`
//   padding: 1rem 3rem;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

export const MenuSider = styled.ul`
  /* display: none; */
  position: fixed;
  top: 0;
  left: ${(props) => (props.lang === "fa" ? "" : "0")};
  right: ${(props) => (props.lang === "fa" ? "0" : "")};
  width: 60%;
  height: 100vh;
  z-index: 50;
  background-color: var(--darkPen);
  list-style: none;
  padding: 2rem;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--whitePen);
  opacity: 0.9;
  transition: all 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  transform: ${(props) =>
    !props.open && props.lang === "fa"
      ? "translateX(120%)"
      : !props.open && props.lang !== "fa"
      ? "translateX(-120%)"
      : ""};
  li {
    margin-bottom: 2rem;
    font-size: var(--lg-font);
  }
  .active {
    font-weight: 700;
  }
  @media (max-width: 525px) {
    display: flex;
  }
`;

export const Humber = styled.div`
  display: none;
  width: 27px;
  height: 15px;
  /* display: flex; */
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: ${(props) => (props.open ? "fixed" : "")};
  z-index: 100;
  left: ${(props) => (props.lang === "fa" ? "unset" : "5%")};
  right: ${(props) => (props.lang !== "fa" ? "unset" : "5%")};
  div {
    border-radius: 10px;
    width: 27px;
    height: 3px;
    background-color: ${(props) =>
      props.open ? "var(--whitePen)" : "var(--darkPen)"};
    transform-origin: 5.5px;
    transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    :nth-child(1) {
      transform: ${(props) => (props.open ? "rotateZ(45deg)" : "")};
    }
    :nth-child(2) {
      transform: ${(props) => (props.open ? "translateX(-200%)" : "")};
      opacity: ${(props) => (props.open ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${(props) => (props.open ? "rotateZ(-45deg)" : "")};
    }
  }
  @media (max-width: 525px) {
    display: flex;
  }
`;

export const HeaderBasic = styled.header`
  padding: 0.5rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 14vh;
  background-color: var(--backWhite);
  direction: var(--dirRi);
  font-size: var(--xs-font);
  @media (max-width: 711px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 560px) {
    padding: 0.5rem 1rem;
    min-height: 8vh;
    button {
      min-width: 100px;
      min-height: 45px;
    }
  }
`;

export const Navbar = styled.nav`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1013px) {
    width: 85%;
  }

  @media (max-width: 778px) {
    width: 100%;
    justify-content: ${(props) => (props.open ? "flex-end" : "space-between")};
  }
`;

export const UlMenu = styled.ul`
  direction: var(--dirRi);
  width: 70%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--darkPen);
  li {
    cursor: pointer;
  }
  .active {
    font-weight: 700;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 560px) {
    font-size: var(--sm-font);
  }
  @media (max-width: 525px) {
    display: none;
  }
`;

export const ButtonRoundBasic = styled.button`
  min-width: ${(props) => (props.width ? props.width : "135px")};
  min-height: 55px;
  background-color: var(--whitePen);
  color: var(--darkPen);
  border-radius: var(--primaryBtnRadius);
  transition: all 0.3s ease-in;
  border: none;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: var(--bluePen);
    color: var(--whitePen);
  }
`;

export const BasicSection = styled.section`
  padding: 2rem 6rem;
  min-height: ${(props) => (props.footer === true ? "65vh" : "86vh")};
  background-color: var(--mainColor);

  @media (max-width: 720px) {
    padding: 1.5rem 2.5rem;
  }
  @media (max-width: 520px) {
    padding: 0.8rem 1.5rem;
  }
`;

export const MainDiv = styled.div`
  direction: var(--dirRi);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .slogan {
    margin: 1rem 0;
  }
  .child {
  }
  .banner {
    width: 40%;
    /* height: 100%  */
    img {
      float: var(--floatRi);
      min-height: 75vh !important;
      max-width: 100%;
      object-fit: cover;
      border-radius: ${(props) =>
        props.radiusImg ? "50% 50% 0% 50%" : "50% 50% 50% 0"};
      transition: all 0.3s linear;
      &:hover {
        border-radius: 0;
      }
    }
  }
  .text {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .description {
    margin-bottom: 2rem;
    color: var(--whitePen);
    h1 {
      font-size: ${(props) => (props.lang === "fa" ? "50pt" : "70pt")};
    }
    h2 {
      font-size: ${(props) => (props.lang === "fa" ? "35pt" : "60pt")};
    }
  }

  @media (max-width: 1040px) {
    .description {
      h1 {
        font-size: ${(props) => (props.lang === "fa" ? "35pt" : "45pt")};
      }
      h2 {
        font-size: ${(props) => (props.lang === "fa" ? "25pt" : "35pt")};
      }
      p {
        font-size: var(--md-font);
      }
    }
  }

  @media (max-width: 698px) {
    flex-direction: column-reverse;
    .child {
      width: 100%;
    }
    .banner {
      img {
        width: 100%;
      }
    }
    .description {
      margin-top: 1rem;
      h1 {
        font-size: 30pt;
      }
      h2 {
        font-size: 32pt;
      }
      p {
        font-size: var(--xs-font);
      }
    }
  }
`;

export const IconDiv = styled.div`
  span {
    width: 55px !important;
    height: 55px !important;
  }

  @media (max-width: 778px) {
    display: none;
  }
`;

export const VideoStyle=styled.section`

width: 100%;
height:100vh;
overflow: hidden;
object-fit: cover;
video{
  width: 100%;
}
button{
  cursor: pointer;
  position: absolute;
  background-color: #ffffffad;
    width: 130px;
    height: 50px;
    border-radius: var(--inputRadius);
    border: none;
    bottom: 3rem;
    right: 3rem;
    font-size: var(--md-font);
}
`
