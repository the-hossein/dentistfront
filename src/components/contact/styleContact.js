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
  position: relative !important;
  .text {
    width: 52%;
    /* height: 84vh;     */
    padding: 2rem 7rem 1rem 5rem;
    color: var(--whitePen);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-size: var(--title-font);
      margin-bottom: 2rem;
    }
    p {
      font-family: var(--fontFamily-light) !important;
      font-size: var(--ms-font);
      border-radius: var(--secondlyBtnRadius);
      background-color: var(--whitePen);
      color: var(--darkPen);
      padding: 1rem 2rem;
      width: 65%;
      margin-bottom: 1.5rem;
    }
    span {
      font-family: var(--fontFamily-light) !important;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      padding: 0 0 0 1rem;
    }
    input {
      font-family: var(--fontFamily-light) !important;
      color: var(--darkPen);
      margin-bottom: 1rem;
    }
    button {
      width: 30%;
      float: var(--floatRi) !important;
    }

    .icons {
      margin-top: 2rem;
    }

    svg {
      &:nth-child(2) {
        margin: 0 3rem;
      }
    }
  }
  .banner {
    width: 40%;
    height: 100vh;
    /* overflow: hidden; */
    position: sticky !important;
    top: 0 !important;
    /* display: grid;
    place-items: center; */
    span {
      object-fit: cover;
      position: sticky !important;
      /* top: 0 !important; */
      width: 100% !important;
      height: 100% !important;
      img {
        width: 100% !important;
        height: 100% !important;
        /* position: sticky !important;
        top: 0 !important; */
        object-fit: cover;
      }
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
      height: 70vh;
      position: unset !important;
      img {
        height: 70vh !important;
      }
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
