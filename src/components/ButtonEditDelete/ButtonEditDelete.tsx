import { useState } from "react"
import { DeleteIcon, EditIcon, OptionsIcon } from "../IconsStyled"
import { ButtonEditDeleteStyled } from "./ButtonEditDeleteStyled"



export const ButtonEditDelete = () => {

    const [optionsActive, setOptionsActive] = useState(false)

    const handleActiveOptions = () => {

        if(!optionsActive){
            setOptionsActive(true)
        }
        else {
            setOptionsActive(false)
        }
    }

    return (


        <>
        <ButtonEditDeleteStyled>

            <button>
                <OptionsIcon onClick={handleActiveOptions}/>
                <div className={optionsActive ? "options-content active" : "options-content"}>
                    <ul>
                        <li>
                            <EditIcon /> <p>Edit</p>
                        </li>
                        <li>
                            <DeleteIcon /> <p>Delete</p>
                        </li>
                    </ul>
                </div>
            </button>

        </ButtonEditDeleteStyled>
        
        
        </>
    )
}