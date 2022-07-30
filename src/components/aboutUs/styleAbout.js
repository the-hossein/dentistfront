import styled from "styled-components";

export const DivMain = styled.div`
padding-top: 1rem;
  direction: var(--dirRi);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .child {
    width: 60%;
  }
  .text {
    color: var(--whitePen);
    h1 {
      font-size: var(--title-font);
      margin-bottom: 2rem;
    }
    p {
      font-family: var(--fontFamily-light);
      font-size: var(--md-font);
      margin-bottom: 1.5rem;
      text-align: justify;
    }
  }

  .parent-col {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    .col {
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      svg {
        :nth-child(2) {
          margin: 0 2rem;
        }
      }
    }
  }
  .pic {
    width: 28%;
    span{
      width: 100% !important;
    }
    img {
      float: var(--floatRi) !important;
      height: 70vh !important;
      width: 100% !important;
      border-top-left-radius: ${(props) =>
        props.lang === "fa" ? "" : "45% 30%"};
      border-top-right-radius: ${(props) =>
        props.lang === "fa" ? "45% 30%" : ""};
      transition: all 0.3s linear;
      object-fit: cover;
      &:hover {
        border-radius: unset;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    /* padding: 1rem; */
    .pic {
      width: 100%;
      img {
        width: 90%;
        object-fit: cover;
      }
    }
    .text {
      margin-top: 1rem;
      width: 100% !important;
    }
    .parent-col {
      width: 100%;
    }
  }
`;
