import styled from "styled-components";
export const RegisterContainer = styled.div`
  direction: var(--dirRi);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--mainColor);
  .registerImg {
    width: 40%;
    height: 86vh;overflow: hidden;
    span {
      width: 100%;
      height: 100% !important;
    }
  }

  .registreForm {
    width: 450px;
    margin: auto;
    .mb {
      margin: 1rem 0 2rem 0;
    }
    h5 {
      color: var(--whitePen);
      font-size: var(--lg-font);
      font-weight: normal;
    }
    button {
      margin: ${(props) =>
        props.lang === "fa" ? "0 1rem 0 0" : "0 0 0 1.5rem"};
    }
    span, input, button, h5{
      font-family: var(--fontFamily-light);
    }
    .socialMedia {
      margin-top: 6rem;
      svg {
        cursor: pointer;
        color: var(--whitePen);
        &:hover {
          color: var(--bluePen);
        }
      }
    }
  }

  @media (max-width: 798px) {
    flex-direction: column-reverse;
    .registerImg {
      width: 100%;
      span {
        height: 50vh !important;
        img {
          object-fit: cover;
        }
      }
    }
    .registreForm {
      margin-top: 2rem;
      width: 90%;
      .mb {
        flex-direction: column;
        button {
          margin: 1rem 0 !important;
        }
      }
      .socialMedia {
        text-align: var(--floatRi);
      }
    }
  }
`;
