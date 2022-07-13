import styled from "styled-components";

export const SectionBasicContact = styled.section`
direction: var(--dirRi);
    min-height: 85vh;
    background-color: var(--mainColor);
`;

export const DivContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .text{
        width: 50%;
        /* height: 84vh;     */
        padding: 3rem 7rem 3rem 5rem;
        color: var(--whitePen);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h1{
            font-size: 30pt;
            margin-bottom: 1rem;
        }
        p{
            border-radius: var(--secondlyBtnRadius);
            background-color: var(--whitePen);
            color: var(--darkPen);
            padding: 1rem 2rem;
            width: 60%;
            margin-bottom: 1rem;
        }
        span{
            margin-bottom: .5rem;
            padding: 0 0 0 1rem;
        }
        input{
            color: var(--darkPen);
            margin-bottom: 1rem;
        }
        button{
            float: var(--floatRi) !important;
        }

        svg{
            &:nth-child(2){
                margin: 0 3rem;
            }
        }

    }
    .banner{
        width: 40%;
        img{
            width: 100%;
            height: 84vh;
        }
    }
`;