import { Outlet, useLocation } from "react-router-dom"
import { Header } from "../Header/Header"
import { SideMenu } from "../SideMenu/SideMenu"
import { MainStyled } from "./LayoutStyled"
import { useEffect, useState } from "react"

export const Layout = () => {

    const location = useLocation();
    const [title,setTitle] = useState('Dashboard');

    useEffect(() => {

        switch (location.pathname) {
            case '/':
                
                setTitle('Dashboard');
                break;
            
            case '/rooms':
    
                setTitle('Room List');
                break;
            
            case '/bookings':
    
                setTitle('Guest List');
                break;

            case '/guest':

                setTitle('Guest List');
                break;
            
            case '/concierge':

                setTitle('Concierge List');
                break;
            default:
                break;
        }


    },[location.pathname])

    

    return (

        <>
        <Header title={title}/>
        <SideMenu />
        <MainStyled>
            <Outlet />
        </MainStyled>

        
        </>
    )
}