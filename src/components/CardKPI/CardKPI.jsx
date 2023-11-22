import { BedIcon } from "../IconsStyled"
import { Styledh1 } from "../headings"
import { CardKPIStyled } from "./CardKPIStyled"



export const CardKPI = (props) => {


    return (

        <>
        <CardKPIStyled>
            <div className="kpi-content">
                {props.icon}
                <div className="kpi-content__text">
                    <Styledh1>{props.number}</Styledh1>
                    <p>{props.text}</p>
                </div>
                
            </div>
            
            

        </CardKPIStyled>
        
        </>

    )
}