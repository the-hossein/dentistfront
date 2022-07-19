import styled from "styled-components";

export const SectionBasicContact = styled.section`
  direction: var(--dirRi);
  min-height: 86vh;
  background-color: var(--mainColor);
`;

export const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .text {
    width: 50%;
    /* height: 84vh;     */
    padding: 3rem 7rem 0rem 5rem;
    color: var(--whitePen);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-size: 30pt;
      margin-bottom: 1rem;
    }
    p {
      border-radius: var(--secondlyBtnRadius);
      background-color: var(--whitePen);
      color: var(--darkPen);
      padding: 1rem 2rem;
      width: 60%;
      margin-bottom: 1rem;
    }
    span {
      margin-bottom: 0.5rem;
      padding: 0 0 0 1rem;
    }
    input {
      color: var(--darkPen);
      margin-bottom: 1rem;
    }
    button {
      float: var(--floatRi) !important;
    }

    svg {
      &:nth-child(2) {
        margin: 0 3rem;
      }
    }
  }
  .banner {
    width: 40%;
    height: 86vh;
    overflow: hidden;

    img {
      width: 100% !important;
      height: 100vh !important;
      object-fit: cover;
    }
  }

  @media (max-width: 1065px) {
    .text {
      width: 60%;
      padding: 3rem;
    }
  }

  @media (max-width: 716px) {
    flex-direction: column-reverse;
    .banner {
      width: 100%;
    }
    .text {
      width: 100%;
      padding: 1rem;
      p {
        width: 100%;
      }
      input {
        min-height: 90px;
      }
    }
    .icons {
      margin-top: 2rem;
      text-align: right;
    }
  }
`;
