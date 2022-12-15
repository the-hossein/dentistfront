import styled from "styled-components";

export const ArrowText = styled.div`
    /* width: 50%; */
    display: flex;
    margin-bottom: ${props => props.first ? "1rem" : "0"};
    margin-top: ${props => props.first ? "0" : "1.5rem"};
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
        transform: ${props => props.reverse ? "" : "rotateZ(180deg)"} scale(4, 2);
        margin: .5rem 0;
    }

    @media (max-width:1019px) {
        h2{
            font-size: var(--lg-font);
        }
    }
`;