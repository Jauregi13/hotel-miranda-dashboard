import styled from "styled-components";



export const ButtonStyled = styled.button`

    color: #FFFFFF;
    font-size: 1rem;
    border-radius: 12px;
    width: 8em;

    ${(props) => 

        props.request === 'true' &&
        
        `
            background-color: #EEF9F2;
            color: #212121;
        
        `
    }


    ${(props) => {

        switch (props.status) {
            case 'available':
                
                return `
                    background-color: #5AD07A;
                `
            case 'booked-rooms':
                
                return `
                    background-color: #E23428;
                `
            case 'booked-guest':

                return `
                    background-color: #E8FFEE;
                    color: #5AD07A;
                `
            case 'refund':

                return `
                    background-color: #FFEDEC;
                    color: #E23428;
                `
            case 'pending':

                return `
                    background-color: #E2E2E2;
                    color: #6D6D6D;
                `
            case 'canceled':

                return `
                    background-color: #575757;
                    color: #BEBEBE;
                `
            case 'archive':
            case 'inactive':
                return `
                    color: #E23428;
                    font-weight: 600;
                    background-color: transparent;
                `
            case 'active':
                return `
                    color: #5AD07A;
                    font-weight: 600;
                    background-color: transparent;
                  `
            case 'login':
                return `
                    color: #FFFFFF;
                    font-weight: 600;
                    background-color: #135846;
                `
        }
    }


    
    }




`