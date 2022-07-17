import styled from "styled-components";

export const DivContainer = styled.div`
    direction: var(--dirRi);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--whitePen);
    h1{
        font-size: 30pt;
    }
    .row {
        margin-top: 2rem;
        width: 100%;
        min-height: 55vh !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .child-row{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 55vh;
            :nth-child(1){
                width: 60%;
            }
            :nth-child(2){
                width: 40%;
            }
        }
    }
    @media (max-width: 868px) {
        .row{
            min-height: fit-content;
            .child-row{
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                height: fit-content;
                :nth-child(1){
                    width: 47%;
                }
                :nth-child(2){
                    width: 47%;
                }
            }
        }
    }
`;