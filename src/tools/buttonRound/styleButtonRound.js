import styled from "styled-components";
export const ButtonRoundBasic = styled.button`
  min-width: ${(props) => (props.width ? props.width : "135px")};
  min-height: 55px;
  background-color: var(--whitePen);
  color: ${(props) =>
    props.status === "logout" ? "var(--redPen)" : "var(--darkPen)"};
  border-radius: var(--primaryBtnRadius);

  border: none;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: var(--bluePen);
    color: var(--whitePen);
  }
`;
