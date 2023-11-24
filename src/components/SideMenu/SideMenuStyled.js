import styled from "styled-components";

export const SideMenuStyled = styled.aside`

    display: none;
    padding-top: 2em;
    position: fixed;
    top: 0;
    width: 20%;
    height: 100vh;
    box-shadow: 13px 3px 40px #00000005;

    ${(props) => {
        if(props.openmenu){
            return `
                display: block;
            `
        }
    }}

    .logo {
        padding-left: 2em;
        display:flex;
        margin-bottom: 3em;
        
        &__text {
            margin-left:1.5em;
        }
    }

    
`