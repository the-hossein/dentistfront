import styled from "styled-components";
export const RegisterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .registerImg {
    width: 40%;
    span {
      width: 100%;
      height: 85vh !important;
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
      margin: 0 0 0 1.5rem;
    }
  }
`;
