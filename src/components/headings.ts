import styled, { DefaultTheme } from "styled-components";

interface HeadingStyledProp {
    theme : DefaultTheme
}

export const Styledh1 = styled.h1<HeadingStyledProp>`
    ${(props) => props.theme.textStyles.h1};
`;

export const Styledh2 = styled.h2<HeadingStyledProp>`
    ${(props) => props.theme.textStyles.h2};
`;
