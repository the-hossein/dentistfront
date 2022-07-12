import styled from "styled-components";

export const Card = styled.div`
    width: 13%;
    height: 100%;
    border-radius: var(--inputRadius);
    overflow: hidden;
    position: relative;
    transition: all .3s linear;
    span{
        width: 100% !important;
        height: 100% !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        z-index: 2 !important;
        img{
            object-fit: cover;
        }
    }

    .name{
        background-color: #fff;
        color: var(--darkPen);
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: 5;
        width: 150px;
        font-size: var(--xl-font);
        border-radius: var(--inputRadius);
        transform-origin: 2px;
        transform: rotateZ(-90deg);
        text-align: center;
        padding: 1rem 0;
        background: rgba(255, 255, 255, 0.06);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(9.2px);
        -webkit-backdrop-filter: blur(9.2px);
        cursor: pointer;
        font-weight: 700;
        transition: all .3s linear;
    }

    &:hover{
        width: 20%;
        .name{
            transform: rotateZ(0) translateX(-50%);
            bottom: 3rem;
        }
    }

`;