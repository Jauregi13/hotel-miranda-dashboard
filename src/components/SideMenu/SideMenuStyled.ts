import styled from "styled-components";

interface SideMenuStyledProp {
    openmenu : boolean
}

export const SideMenuStyled = styled.aside<SideMenuStyledProp>`

    padding-top: 2em;
    position: fixed;
    top: 0;
    width: 0%;
    height: 100vh;
    box-shadow: 13px 3px 40px #00000005;
    transition: width 0.5s ease;

    ${(props) => {
        if(props.openmenu){
            return `
                width: 20%;
                
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