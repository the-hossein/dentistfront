import styled from "styled-components";

export const ArrowText = styled.div`
    /* width: 50%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--whitePen);
    cursor: pointer;
    &:hover{
        svg{
            color: var(--bluePen);
        }
    }
    svg{
        transition: all .4s ease-in;
        transform: ${props => props.reverse ? "" : "rotateZ(180deg)"} scale(6, 3);
        margin: 1rem 0;
    }

    
`;