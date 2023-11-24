import styled from "styled-components";



export const MainStyled = styled.main`

    position: absolute;
    top: 14vh;
    width:${(props) => props.openmenu ? '80%' : '100%'};
    left: ${(props) => props.openmenu ? '20%' : '0'};
    min-height:86vh;
    background-color: #F8F8F8;

`