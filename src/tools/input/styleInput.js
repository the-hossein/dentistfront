import styled from "styled-components";
export const InputStyle = styled.input`
  background-color: var(--whitePen);
  border: none;
  border-radius: var(--inputRadius);
  height: 50px;
  width: 100%;
  outline: rgb(0, 0, 0);
  padding: 0 1rem;
  text-align: var(--floatLf);

  &:disabled {
    opacity: 50%;
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  span {
    color: var(--redPen);
    font-size: var(--sm-font);
    display: inline-block;
    margin-top: 0.3rem;
    float: var(--floatLf);
  }
`;
