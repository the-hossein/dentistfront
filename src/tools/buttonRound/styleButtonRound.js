import styled from "styled-components";
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
