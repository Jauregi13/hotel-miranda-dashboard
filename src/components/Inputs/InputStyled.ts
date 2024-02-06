import styled from "styled-components";




export const InputStyled = styled.div`

    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;

    & label {
        font-family: 'Poppins';
        color: #135846;
        font-weight: 600;
        text-align: start;
        margin-bottom: 0.5em;
    }

    & input {
        font-size: 1em;
        width: 100%;
        border: none;
        border-bottom: 2px solid #135846;
    }

    & input:focus {
        outline: none;
    }

    & textarea {
        border: none;
        border-bottom: 2px solid #135846;
    }

    & textarea:focus {
        outline: none;
    }

`