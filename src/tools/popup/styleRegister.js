import styled from "styled-components";

export const PopUpStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #00000073;
  z-index: 100;
  button {
    margin-top: 1rem;
    float: var(--floatRi);
  }
  .popup {
    width: 330px;
    height: fit-content;
    padding: 1rem;
    border-radius: var(--inputRadius);
    background-color: var(--backWhite);
  }
`;
