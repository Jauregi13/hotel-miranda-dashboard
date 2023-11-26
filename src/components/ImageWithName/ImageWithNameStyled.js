import styled from "styled-components";


export const ImageWithNameStyled = styled.div`

    display: flex;

    & img {
        margin-right: 2em;
        border-radius: 8px;
        width: ${(props) => props.type === 'user' ? '88px' : '45px'};
        height: ${(props) => props.type === 'user' ? '88px' : '45px'};
    }

    & p {
        line-height: 0.5em;
    }

`