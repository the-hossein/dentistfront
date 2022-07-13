import styled from "styled-components";

export const MainSection = styled.section`
    min-height: 85vh;
    background-color: var(--mainColor);
`;

export const DivContainer = styled.div`
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
                border-top-left-radius: 50%;
                border-bottom-right-radius: 50%;

            }
        }
    }
`;

export const TextContainer = styled.div`
    width: 55%;
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
        text-align: right;
    }
`;