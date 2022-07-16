import styled from "styled-components";
export const SecondlyButtonStyle = styled.button`
  background-color: var(--whitePen);
  border: none;
  border-radius: var(--secondlyBtnRadius);
  width: ${(props) => (props.size === "small" ? "140px" : "210px")};
  height: 50px;
  color: var(--darkPen);
  cursor: pointer;
  &:hover {
    background-color: var(--bluePen);
    color: var(--whitePen);
  }
  &:disabled {
    opacity: 50%;
  }
  &:disabled:hover {
    background-color: var(--whitePen);
    color: var(--darkPen);
  }
  @media (max-width: 572px) {
    width: 150px;
  }
`;
