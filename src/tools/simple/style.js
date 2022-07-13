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
        span{
            border-top: 1px solid ;
        }
    }
    img{
        height: 105px !important ;
    }
`;