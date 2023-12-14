import styled from "styled-components";

interface HeaderStyledProp {
    openmenu : boolean
}

export const HeaderStyled = styled.header<HeaderStyledProp>`

    position: fixed;
    top: 0;
    left: ${(props) => props.openmenu ? '20%': '0%'};
    z-index: 1000;
    width: ${(props) => props.openmenu ? '80%' : '100%'};
    height: 14vh;
    background-color: #FFFFFF;
    box-shadow: 0px 3px 10px #00000005;
    transition: width,left 0.5s ease;

    & .header-content {
        height: inherit;
        display: flex;
        align-items: center;
        padding-left: 1.5em;

        & h1 {
            width: 30%;
        }

        &__menu-icon {
            margin-right: 2em;
        }

        &__right-icons {
            width: 63%;
            display: flex;
            justify-content: flex-end;
            padding-right: 2em;

            & svg {
                margin-left: 2em;
            }
        }
    }


`