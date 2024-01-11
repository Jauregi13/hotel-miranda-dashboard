

import styled from "styled-components";


export const ButtonEditDeleteStyled = styled.div`

    position: relative;

    & button {
        background-color: transparent;
    }

    & .options-content {
        display: none;
        position: absolute;
        background-color: #FFFFFF;
        box-shadow: 0px 16px 30px 30px #00000014;
        border-radius: 10px;
        z-index: 1;
    }

    & .options-content.active {
        display: block;
    }

    & .options-content ul {
        padding: 0.5em;
        padding-right: 1em;
        margin: 0;
        margin-left: 1em;
        
        

        & li {
            display: flex;
            align-items: center;
            width: 100%;

            & p {
                margin-left: 0.5em;
            }
        }

        & li:hover {
            transform: scale(1.2);
        }
    }



`