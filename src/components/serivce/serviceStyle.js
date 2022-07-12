import styled from "styled-components";

export const DivContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--whitePen);
    h1{
        font-size: 30pt;
    }
    .row {
        margin-top: 2rem;
        width: 100%;
        height: 60vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;