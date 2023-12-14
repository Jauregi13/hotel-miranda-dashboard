

import styled from "styled-components";


export const NavStyled = styled.nav`

    ul {
        padding: 0;
        margin: 0;
    }
    ul li {
        padding-left: 2em;
    }

    ul li > ul li .active {
        border-left: 6px solid ${props => props.theme.colors.red};
    }

`