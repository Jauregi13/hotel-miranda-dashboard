import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const NavLinkStyled = styled(NavLink)`

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