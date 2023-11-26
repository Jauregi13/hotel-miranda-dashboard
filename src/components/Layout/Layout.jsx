import { useLocation, Outlet, useNavigate } from "react-router-dom"
import { Header } from "../Header/Header"
import { SideMenu } from "../SideMenu/SideMenu"
import { useEffect, useState } from "react"
import { MainStyled } from "../MainStyled"
import { useMenuOpenContext } from "../MenuOpenContext"

export const Layout = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [title,setTitle] = useState('Dashboard');
    const {isOpen} = useMenuOpenContext();
    const [user,setUser] = useState(localStorage.getItem('loginSession'));

    useEffect(() => {

        if(user != null){

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
        }

        else {
            navigate('/login');
        }

        

    },[location.pathname,user])


    

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