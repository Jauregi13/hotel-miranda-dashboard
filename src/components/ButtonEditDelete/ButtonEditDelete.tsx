import { useRef, useState } from "react"
import { DeleteIcon, EditIcon, InfoIcon, OptionsIcon } from "../IconsStyled"
import { ButtonEditDeleteStyled } from "./ButtonEditDeleteStyled"
import { Link } from "react-router-dom"
import { useOnClickOutside } from "usehooks-ts"

interface PropBookingId {

    id: string
}


export const ButtonEditDelete = (props: PropBookingId) => {

    const [optionsActive, setOptionsActive] = useState(false)
    const optionsContentRef = useRef<HTMLDivElement>(null)

    const handleActiveOptions = () => {

        setOptionsActive((prev) => !prev)
    }

    const handleHideOptions = ()  => {
        setOptionsActive(false)
    }

    useOnClickOutside(optionsContentRef, handleHideOptions)

    return (


        <>
        <ButtonEditDeleteStyled>

            <button>
                <OptionsIcon onClick={handleActiveOptions}/>
                <div className={optionsActive ? "options-content active" : "options-content"} ref={optionsContentRef}>
                    <ul>
                        <li>
                            <Link to={'/bookings'}>
                                <EditIcon /> <p>Edit</p>
                            </Link>
                            
                        </li>
                        <li>
                            <Link to={'/bookings'}>
                                <DeleteIcon /> <p>Delete</p>
                            </Link>
                            
                        </li>
                        <li>
                            <Link to={`/bookings/${props.id}`}>
                                <InfoIcon/> <p>Info</p>
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </button>

        </ButtonEditDeleteStyled>
        
        
        </>
    )
}