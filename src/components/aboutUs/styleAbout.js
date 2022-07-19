import styled from "styled-components";

export const DivMain = styled.div`
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
      font-size: 30pt;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 2rem;
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
    width: 38%;
    img {
      float: var(--floatRi) !important;
      height: 70vh !important;
      border-top-left-radius: ${(props) =>
        props.lang === "fa" ? "" : "50% 30%"};
      border-top-right-radius: ${(props) =>
        props.lang === "fa" ? "50% 30%" : ""};
      transition: all 0.3s linear;

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
      width: 100%;
    }
    .parent-col {
      width: 100%;
    }
  }
`;
