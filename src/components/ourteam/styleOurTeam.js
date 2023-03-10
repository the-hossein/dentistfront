import styled from "styled-components";

export const MainDiv = styled.div`
    width: 100%;
    /* height: 100%; */
    min-height: ${(props) => (props.footer === true ? "65vh" : "86vh")};
    background-color: var(--mainColor);
    direction: var(--dirRi);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative !important;
`;

export const Album = styled.div`
    width: 35% !important;
    height: 100vh;
    position: sticky;
    top: 0;
    bottom: 0 !important;
    .swiperKarma{
        object-fit: cover;
        position: sticky !important;
        bottom: 15vh !important;
        width: 100% ;
        height: 100vh;
    }
    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media (max-width: 1002px){
        display: none;
    }
`;

export const DivText = styled.div`
    width: 65% !important;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem 2rem 3rem 6rem;
    color: var(--whitePen);
    h1{
        font-size: var(--title-font);
        margin: 0 0 2rem 0;
    }
    h2{
        font-family: var(--fontFamily-light);
    }
    p{
        font-family: var(--fontFamily-light);
        font-size: var(--md-font);
    }
    @media (max-width: 1002px){
        width: 100% !important;
        padding: 3rem 6rem 3rem 6rem;
    }
    @media (max-width: 711px){
        padding: 3rem 2rem;
    }

`;