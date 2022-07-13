import styled from "styled-components";

export const MainSection = styled.section`
    direction: var(--dirRi);
    min-height: 85vh;
    background-color: var(--mainColor);
`;

export const DivContainer = styled.div`
    direction: var(--dirRi) !important;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .image{
        width: 40%;
        span{
            width: 100% !important;
            height: 84vh !important;
            img{
                object-fit: cover;
                border-radius:${props => props.lang === "fa" ? "0 50% 0 50%" : "50% 0 50% 0" } ;
            }
        }
    }

    @media (max-width: 1020px) {
        .image{
            span{
                height: auto !important;
            }
        }
    }

    @media (max-width: 762px) {
        flex-direction: column-reverse;
        .image{
            width: 100%;
            span{
                height: 55vh !important;
            }
        }
    }
`;

export const TextContainer = styled.div`
    width: 55%;
    height: 100%;
    color: var(--whitePen);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem 4rem 0;
    h1{
        font-size: 30pt;
        margin-bottom: 1rem;
    }
    p{
        margin-bottom: 2rem;
        text-align: justify;
    }
    .input{
        width: 80%;
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        label{
            width: 25%;
        }
        input{
            color: var(--darkPen);
        }
    }
    .btn{
        width: 80%;
        margin-top: 1rem;
        text-align: var(--floatRi);
    }
    @media (max-width: 1020px) {
        padding: 2rem 2rem 0;
        .input{
            width: 100%;
        }
        .btn{
            width: 100%;
            button{
                width: 50%;
            }
        }
    }
    @media (max-width: 800px) {
        .btn{
            margin-bottom: 2rem;
        }
    }
    @media (max-width: 762px) {
        padding: 1rem 1rem 0;
        width: 100%;
    }
`;