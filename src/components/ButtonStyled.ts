import styled from "styled-components";

interface ButtonProps {

    request?: string,
    status?: string
}

export const ButtonStyled = styled.button<ButtonProps>`

    color: #FFFFFF;
    font-size: 1rem;
    border-radius: 12px;
    width: 8em;

    ${(props : ButtonProps) => 

        props.request === 'true' &&
        
        `
            background-color: #EEF9F2;
            color: #212121;
        
        `
    }


    ${(props : ButtonProps) => {

        switch (props.status) {
            case 'Available':
                
                return `
                    background-color: #5AD07A;
                `
            case 'Booked':
                
                return `
                    background-color: #E23428;
                `
            case 'Check In':

                return `
                    background-color: #E8FFEE;
                    color: #5AD07A;
                `
            case 'Check Out':

                return `
                    background-color: #FFEDEC;
                    color: #E23428;
                `
            case 'In Progress':

                return `
                    background-color: #fbfbc7;
                    color: #989e2e;
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
            case 'create':
            case 'update':
                return `
                    color: #FFFFFF;
                    font-weight: 600;
                    background-color: #135846;
                `
        }
    }


    
    }




`