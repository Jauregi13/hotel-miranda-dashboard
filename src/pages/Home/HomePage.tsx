import { CardKPI } from "../../components/CardKPI/CardKPI"
import { BedIcon, BookingsIcon } from "../../components/IconsStyled"
import { HomeStyled } from "./HomeStyled"


export const HomePage = () => {


    return (

        <>
        <HomeStyled>
            <div className="kpis-container">
                <CardKPI icon={<BedIcon/>} number='8,461' text='New Booking'/>
                <CardKPI icon={<BookingsIcon/>} number='963' text='Scheduled Room'/>
                <CardKPI icon={<BedIcon/>} number='753' text='Check In'/>
                <CardKPI icon={<BedIcon/>} number='516' text='Check Out'/>
            </div>
            
        </HomeStyled>

        
        </>
    )
}