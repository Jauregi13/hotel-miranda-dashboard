import styled from "styled-components";


export const TabsStyled = styled.ul`

    display: flex;
    padding: 0;
    border-bottom: 1px solid #D4D4D4;
    width: fit-content;

    & li {
        font-weight: 600;
        color: #6E6E6E;
        padding: 1em;
        padding-left: 3em;
        padding-right: 3em;
        cursor: pointer;
    }

    & li:hover {
        color: #135846;
        border-bottom: 2px solid #135846;
    }

`