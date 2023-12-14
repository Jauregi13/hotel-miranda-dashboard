import styled from "styled-components";



export const ContactStyled = styled.div`

    width: 90%;
    margin: 0 auto;
    margin-top: 2em;

    & .reviews-content {
        margin-right: 1em;
        display: flex;

        & > *:not(:first-child) {

            margin-left: 2em;
        }
    }

    & .contact-tabs {
        margin-top: 3em;
    }


`