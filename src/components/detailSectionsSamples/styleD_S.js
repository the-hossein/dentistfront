import styled from "styled-components";

export const DivContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    position: relative;
    color: var(--whitePen) !important;
    direction: var(--dirRi);
    h1{
        width: fit-content;
        display: flex;
        justify-content: start;
        align-items: flex-start;
        position: absolute;
        top: -3rem;
        left: 0rem !important;
        cursor: pointer;
        svg{
            transform: scale(3, 1.4);
        }
    }
    h2{
        font-size: var(--title-font);
    }
    @media (max-width: 969px) {
        margin-top: 3rem;
    }
`;

export const DivRow = styled.div`
    display: flex;
    flex-direction: ${props => props.reverse ? "row-reverse" : "row" };
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 1rem;
    border-bottom: ${props => props.border_button ? "1px solid var(--whitePen) " : ""};
    padding-bottom: ${props => props.border_button ? "6rem" : ""};
    margin-bottom: ${props => props.border_button ? "6rem" : ""};
    .text{
        width: 33%;
        color: var(--whitePen);
        text-align: justify;
        h3{
            font-size: var(--xl-font);
            margin-bottom: 1rem;
        }
    }
    .images{
        width: 65% !important;
        height: 100%;
    }
    @media (max-width: 969px) {
        flex-direction: column-reverse;
        .images{
            width: 100% !important;
            margin-bottom: 1rem;
        }
        .text{
            width: 100%;
        }
    }
`;