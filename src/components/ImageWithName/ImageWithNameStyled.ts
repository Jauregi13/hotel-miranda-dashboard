import styled from "styled-components";

interface ImageNameStyledProp {
    type: string
}

export const ImageWithNameStyled = styled.div<ImageNameStyledProp>`

    display: flex;

    & img {
        margin-right: 2em;
        border-radius: 8px;
        width: ${(props) => props.type === 'user' ? '100px' : '55px'};
        height: ${(props) => props.type === 'user' ? '100px' : '55px'};
    }

    & p {
        line-height: 0.4em;
    }

`