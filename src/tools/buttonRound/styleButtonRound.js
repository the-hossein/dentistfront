import styled from "styled-components";
export const ButtonRoundBasic = styled.button`
  min-width: ${(props) => (props.width ? props.width : "135px")};
  min-height: 55px;
  background-color: ${props => props.reverse ? "var(--mainColor)" : "var(--whitePen)"};
  color: ${(props) => !props.reverse ? "var(--darkPen)" : "var(--whitePen)"};
  border-radius: var(--primaryBtnRadius);

  border: none;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.reverse ? "var(--whitePen)" : "var(--bluePen)"};
    color: ${props => !props.reverse ? "var(--whitePen)" : props.status !== "logout"  ? "var(--darkPen)" : "var(--darkPen)" } ;
  }
`;
