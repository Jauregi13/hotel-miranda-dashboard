import { useLocation, Outlet, useNavigate, Location, NavigateFunction } from "react-router-dom"
import { Header } from "../Header/Header"
import { SideMenu } from "../SideMenu/SideMenu"
import { useEffect, useState } from "react"
import { MainStyled } from "../MainStyled"
import { useMenuOpenContext } from "../MenuOpenContext"

export const Layout = () => {

    const location: Location = useLocation();
    const navigate : NavigateFunction = useNavigate();
    const [title,setTitle] = useState<string>('Dashboard');
    const {isOpen} = useMenuOpenContext();
    const [userToken] = useState(localStorage.getItem('loginToken'));

    useEffect(() => {
        
        console.log(/^\/bookings\/\d+$/.test(location.pathname));
        console.log(location.pathname);
        
        
        if(userToken != null){

            if(/^\/bookings\/\d+$/.test(location.pathname)){
                setTitle('Guest Details');
            }
            else {
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
                }
            }

            
        }

        else {
            navigate('/login');
        }

        

    },[location.pathname,userToken])


    

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