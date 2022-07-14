import styled from "styled-components";

export const Card = styled.div`
    min-height: 60vh;
    min-width: 47%;
    position: relative;
    overflow: hidden;
    border-radius: var(--inputRadius);
    span{
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: auto !important;
        bottom: auto !important;
        width: 100% !important;
        height: 100% !important;
        z-index: 2 !important;
        img{
            z-index: 2 !important;
            object-fit: cover;
        }
    }
    .showCase{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background-color: #fff;
        padding: 1rem 2rem;
        font-size: var(--xxl-font);
        z-index: 5;
        bottom: 30px;
        left: 50%;
        border-radius: var(--inputRadius);
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.46);
        /* border-radius: 16px; */
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(9.2px);
        -webkit-backdrop-filter: blur(9.2px);
        cursor: pointer;
        font-weight: 700;
    }
    @media (max-width: 1210px) {
        .showCase{
            font-size: var(--lg-font);
        }
    }
    @media (max-width: 995px){
        .showCase{
            font-size: var(--md-font);
            padding: 1rem 1rem;
        }
    }
    
    @media (max-width: 761px){
        min-width: 100%;
        margin-bottom: 3rem;
        height: 45vh;
    }
    @media (max-width: 461px){
        .showCase{
            padding: .8rem 1rem;
            font-size: var(--xs-font);
        }
        height: 35vh;
    }
`;