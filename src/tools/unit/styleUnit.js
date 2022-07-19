import styled from "styled-components";

export const UnitDiv = styled.div`
    margin: 2rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--whitePen);
    padding-bottom: 2rem;
    .text{
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        h2{
            font-size: var(--lg-font);
            margin-bottom: 1.5rem;
        }
        p{
            font-size: var(--sm-font);
            text-align: justify;
        }
    }
`; 

export const ContainerImage = styled.div`
    direction: ltr !important;
    width: 65%;
    display: flex;
    justify-content: ${props => props.lang === "fa" ? "flex-start" : "flex-end"};
    align-items: center;
`;

export const BoxImage = styled.div`
    margin: 0 1rem;
    width: 100px !important;
    height: 150px !important;
    border-top-left-radius: ${props=> props.id === 0 || props.id=== 8 ? "60% 30%" : ""} ;
    border-top-right-radius: ${props=> props.id === 2 ? "60% 30%" :""} ;
    border-bottom-right-radius: ${props=> props.id === 1 || props.id === 4 || props.id === 12 ? "60% 30%" : ""} ;
    border-bottom-left-radius: ${props=> props.id === 3 ? "60% 30%" : ""} ;
    overflow: hidden;
    span{
        width: 100px !important;
        height: inherit !important;
        img{
            width: 100px !important;
            height: inherit !important;
            object-fit: cover;
        }
    }
`;