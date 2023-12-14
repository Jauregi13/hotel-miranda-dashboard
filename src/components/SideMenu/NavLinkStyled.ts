import { NavLink } from "react-router-dom";
import styled, { DefaultTheme } from "styled-components";

interface NavLinkStyledProp {
    theme : DefaultTheme
}

export const NavLinkStyled = styled(NavLink)<NavLinkStyledProp>`

    color: ${props => props.theme.colors.lightGreen};
    display: flex;
    height: 4em;
    align-items: center;

    &.active {
        font-weight: 600;
        color: ${props => props.theme.colors.red}
    }

    & span {
        margin-left: 1em;
    }



    

`