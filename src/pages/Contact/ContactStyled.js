import styled from "styled-components";



export const ContactStyled = styled.div`

    padding-left: 2em;
    padding-top:2em;

    & .reviews-content {
        margin-right: 1em;
        display: flex;

        & > *:not(:first-child) {

            margin-left: 2em;
        }
    }

    & .contact-table {
        margin-top: 4em;
    }


`