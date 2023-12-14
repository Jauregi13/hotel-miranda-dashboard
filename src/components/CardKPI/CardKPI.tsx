import { Styledh1 } from "../headings"
import { CardKPIStyled } from "./CardKPIStyled"
import { ReactElement } from "react"


interface CardKPIProps {
    icon: ReactElement
    number: string
    text: string
}

export const CardKPI = (props: CardKPIProps) => {

    return (

        <CardKPIStyled>
            {props.icon}
            <div className="kpi-content-text">
                <Styledh1>{props.number}</Styledh1>
                <p>{props.text}</p>
            </div>            

        </CardKPIStyled>

    )
}