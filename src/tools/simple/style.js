import styled from "styled-components";

export const MainDiv = styled.div`
    /* width: 100%; */
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
    span{
        background-color: var(--whitePen) !important;
        width: 90px !important;
        /* border-radius: 50% 50% 0 0; */
        border-top-left-radius: 50% 50%;
        border-top-right-radius: 50% 50%;
        padding: 1rem !important;
        height: 115px !important ;
        img{
            height: 105px !important ;
            object-fit: cover;
        }
    }
    
`;