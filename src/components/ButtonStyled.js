import styled from "styled-components";



export const ButtonStyled = styled.button`

    color: #FFFFFF;
    font-size: 1rem;
    border-radius: 12px;
    background-color: ${props => {
        if(props.available){
            return '#5AD07A'
        }
        else if(props.booked){
            return '#E23428';
        }
    }}


`