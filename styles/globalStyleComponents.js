import styled from "styled-components";
export const RowJustifyBetween = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.align ? props.align : "center")};
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

export const HeaderBasic = styled.header`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 15vh;
  background-color: var(--backWhite);
  direction: var(--dirRi);
  font-size: var(--md-font);
`;

export const Navbar = styled.nav`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UlMenu = styled.ul`
  direction: var(--dirRi);
  width: 100%;
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
  padding: 2rem 3rem;
  min-height: ${props=>props.footer===true?"65vh":"85vh"};
  background-color: var(--mainColor);

`;

export const MainDiv = styled.div`
direction: var(--dirRi);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .child {
    width: 50%;
    /* padding: 1rem; */
  }
  .banner {
    img {
      float: var(--floatRi);
      height: 70vh;
      border-radius:${props => props.radiusImg ? "50% 50% 0% 50%" : "50% 50% 50% 0"} ;
      transition: all 0.3s linear;
      &:hover {
        border-radius: 0;
      }
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .description {
    margin-bottom: 2rem;
    color: var(--whitePen);
    h1 {
      font-size: 60pt;
    }
    h2 {
      font-size: 50pt;
    }
  }
`;

export const IconDiv = styled.div`
  /* width: 10%; */
  span{
    width: 55px !important;
    height: 55px !important;

  }

`;
