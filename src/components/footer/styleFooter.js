import styled from "styled-components";
export const FooterContainer = styled.div`
  width: 100%;
  min-height: 20vh;
  padding: 0.5rem 3rem;
  background-color: var(--whitePen);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h6 {
    font-weight: normal;
    margin-bottom: 0.5rem;
    font-size:var(--xs-font)
  }
  h3{
    margin-top: 0.5rem;
    font-weight: normal;
    font-size: var(--sm-font);
    a{
      text-decoration: underline;
      &:hover{
        color: var(--mainColor);
      }
    }
  }

`;
