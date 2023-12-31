

import styled from "styled-components";


export const TBodyStyled = styled.tbody`

    & tr td {
        padding: 1em;
        padding-bottom: 0.5em;
        text-align: start;
        max-width: 250px;

    }

    & tr > *:not(:last-child){
        border-bottom: 1px solid #F5F5F5;
    }

    & tr {
        vertical-align: middle;
    }

    & tr:hover {
        box-shadow: 0px 4px 30px #0000001A;
    }

    & tr td p {
       font-size: 1rem;
    }

    & tr td:has(.room-name) {
        max-width: 305px;
    }

    & tr td.contact-comment {
        max-width: 500px;
    }






`