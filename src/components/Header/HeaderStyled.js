import styled from "styled-components";

export const HeaderStyled = styled.header`

    position: fixed;
    top: 0;
    z-index: 1000;
    width: 75%;
    left: 25%;
    height: 14vh;
    box-shadow: 0px 3px 10px #00000005;

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