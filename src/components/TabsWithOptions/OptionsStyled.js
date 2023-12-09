import styled from "styled-components";



export const OptionsStyled = styled.div`

    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1em;

    & button {
        padding-left: 2em;
        padding-right: 2em;
        width: auto;
        
    }

    & select {
        margin-left: 2em;
    }

    & select option {
        text-align: center;
    }
`