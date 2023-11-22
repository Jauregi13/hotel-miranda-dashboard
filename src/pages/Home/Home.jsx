import { CardKPI } from "../../components/CardKPI/CardKPI"
import { BedIcon } from "../../components/IconsStyled"
import { HomeStyled } from "./HomeStyled"


export const Home = () => {


    return (

        <>
        <HomeStyled>
            <CardKPI icon={<BedIcon/>} number='8,461' text='New Booking'/>
            <CardKPI icon={<BedIcon/>} number='963' text='Scheduled Room'/>
            <CardKPI icon={<BedIcon/>} number='753' text='Check In'/>
            <CardKPI icon={<BedIcon/>} number='516' text='Check Out'/>
        </HomeStyled>

        
        </>
    )
}