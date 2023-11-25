import { useLocation, Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { SideMenu } from "../SideMenu/SideMenu"
import { useEffect, useState } from "react"
import { MainStyled } from "../MainStyled"
import { useMenuOpenContext } from "../MenuOpenContext"

export const Layout = () => {

    const location = useLocation();
    const [title,setTitle] = useState('Dashboard');
    const {isOpen} = useMenuOpenContext()

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

            case '/contact':

                setTitle('Reviews');
                break;
            
            case '/users':

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
        <MainStyled openmenu={isOpen}>
            <Outlet />
        </MainStyled>
        

        
        </>
    )
}