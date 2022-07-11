import styled from "styled-components";
export const RowJustifyBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderBasic = styled.header`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 15vh;
  background-color: var(--backWhite);
`;

export const Navbar = styled.nav`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UlMenu = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--darkPen);
  li {
    cursor: pointer;
  }
`;

export const BasicSection = styled.section`
  min-height: 85vh;
  background-color: var(--mainColor);
`;
