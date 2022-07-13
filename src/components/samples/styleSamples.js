import styled from "styled-components";

export const DivContainer = styled.div`
    direction: var(--dirRi);
    width: 100%;
    height: 100%;
    h1{
        font-size: 30pt;
        color: var(--whitePen);
    }
    .row{
        margin-top: 2rem;
        width: 100%;
        min-height: 55vh;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .col{
            width: 48.5%;
            min-height: 55vh;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
    }

    @media (max-width: 761px) {
        .row{
            .col{
                width: 45.5%;
                min-height: 55vh;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                :nth-child(2){
                    margin-top: 5rem;
                }
            }
        }
    }
`;