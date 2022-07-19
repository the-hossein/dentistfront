import styled from "styled-components";

export const MainDiv = styled.div`
    direction: initial;
    display: flex;
    flex-direction: ${props => props.lang==="fa" ? "row-reverse" : "row"};
    justify-content: center;
    align-items: center;
    div{
        color: var(--whitePen);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 1rem;
    }
    .karmaLogo{
        background-color: var(--whitePen) !important;
        width: 80px !important;
        height: 115px !important;
        border-top-left-radius: 50% 40%;
        border-top-right-radius: 50% 40%;
        display: grid;
        place-items: center;
        span{
            width: 60% !important;
            height: 60% !important ;
        }
        img{
            object-fit: cover;
        }
    }
`;