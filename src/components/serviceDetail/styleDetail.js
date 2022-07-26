import styled from "styled-components";

export const MainDiv = styled.div` 
    width: 100% !important;
    height: 100%;
    direction: var(--dirRi);
    display: flex;
    justify-content: space-between !important;
    align-items: flex-start;
    position: relative;
    .back{
        color: var(--whitePen);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--lg-font);
        cursor: pointer;
        top: 0;
        left:${props => props.lang === "fa" ? "" : "0"};
        right: ${props => props.lang === "fa" ? "0" : ""};
        svg{
            font-size: var(--xxl-font);
            transform: scale(3, 1.8 );
        }
    }
    @media (max-width: 720px){
        flex-direction: column-reverse;
    }
`;

export const TextContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: var(--whitePen);
    margin-top: 2rem;
    padding: ${props => props.lang === "fa" ? "0 0 0 5rem" : "0 5rem 0 0" } ;
    h1{
        margin: 2rem 0;
        font-size: var(--title-font);
    }
    p{
        margin: 1.5rem 0;
    }
    .btnContainer{
        margin-top: 2rem;
        width: 100%;
    }
    button{
        float: var(--floatRi);
    }
    @media (max-width: 720px){
        width: 100%;
        padding: 0;
    }
`;

export const Album = styled.div`
    margin-top: 1rem;
    width: 45%;
    height: 72vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    div{
        height: 50%;
    }
    .first-child{
        width: 70% !important;
        height: 45% !important;
        span{
            height: 100% !important;
            width: 100% !important;
            border-top-left-radius: ${props => props.lang === "fa" ? "" : "40% 60%"};
            border-top-right-radius: ${props => props.lang !== "fa" ? "" : "40% 60%"};   
            img{
                height: 38vh !important;
                object-fit: cover;
            }
        }
    }
    .second-child{
        width: 100% !important;
        height: 50% !important;
        span{
            height: 100% !important;
            width: 100% !important;
            border-top-left-radius: ${props => props.lang === "fa" ? "" : "30% 60%"};
            border-top-right-radius: ${props => props.lang !== "fa" ? "" : "30% 60%"};
            img{
                height: 40vh !important;
                object-fit: cover;
            }
        }
    }
    @media (max-width: 720px){
        width: 100%;
        height: 52vh;
    }
`;