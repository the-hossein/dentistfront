import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
    justify-content: flex-start;
    align-items: flex-start;
    .first{
        width: 40%;
        display: flex;
        justify-content: ${props => props.reverse ? "var(--floatRi)" : "var(--floatLf)" };
        img{
            width: 95% !important;
            height: 80vh !important;
            border-top-right-radius:${props => props.lang !== "fa" && props.reverse ? "50% 30%" :props.lang === "fa" && !props.reverse ? "50% 30%" :"" };
            border-top-left-radius:${props => props.lang === "fa" && !props.reverse ? "" :props.lang !== "fa" && props.reverse ? "" :"50% 30%" };
            object-fit: cover;
        }
    }
    .second{
        display: flex;
        flex-direction: column;
        align-items: ${props => props.reverse ? "flex-end" : "flex-start"};
        justify-content: space-between !important;
        overflow: hidden;
        width: 60%;
        height: 80vh;
        img{
            :nth-child(1){
                float:${props => props.reverse ? "right" : "left"} ;
                width: 70%;
                height: 48%;
                border-top-left-radius: ${props =>  props.lang !== "fa" && props.reverse ? "50%" : props.lang === "fa" && !props.reverse ? "50%" : ""} ;
                border-top-right-radius: ${props =>  props.lang === "fa" && !props.reverse ? "0" : props.lang !== "fa" && props.reverse ? "" : "50%"} ;
                object-fit: cover;
            }
            :nth-child(2){
                width: 100%;
                height: 48%;
                border-top-left-radius:${props => props.lang !== "fa" && props.reverse ? "30% 50%" : props.lang === "fa" && !props.reverse ? "30% 50%" : "" } ;
                border-top-right-radius:${props => props.lang === "fa" && !props.reverse ? "" : props.lang !== "fa" && props.reverse ? "" : "30% 50%"} ;
                object-fit: cover;
            }
        }
    }
    @media (max-width: 969px) {
        .first{
            img{
                height: 50vh !important;
            }
        }
        .second{
            height: 50vh;
        }
    }
`;
