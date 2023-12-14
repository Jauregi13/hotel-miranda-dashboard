import styled from "styled-components";



export const ReviewStyled = styled.div`


    width: 22em;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0px 4px 4px #00000005;
    padding: 1em;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 16px 30px #00000014;  
    }

    & p {
        width: 90%;
    }

    & .review-owner {
        display: flex;
        align-items: center;

        & img {
            border-radius: 8px;
        }

        &__name {
            width: 65%;
            margin-left: 1em;
            line-height: 0.5em;
        }
        &__icons {
            display: flex;
            margin-top: 2em;

            & > :first-child {

                margin-right: 1em;
            }
        }

        
    }

`