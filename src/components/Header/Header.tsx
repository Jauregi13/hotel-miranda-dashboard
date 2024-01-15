import { HeaderStyled } from "./HeaderStyled"
import { Styledh1 } from "../headings"
import { BellIcon, EmailIcon, GoBackIcon, LogoutIcon, MenuIcon } from "../IconsStyled"
import { useMenuOpenContext } from "../MenuOpenContext"
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom"


export const Header = ({title} : { title : string}) => {

    const {isOpen,open, close} : {isOpen: boolean, open : () => void, close: () => void} = useMenuOpenContext()
    const navigate : NavigateFunction = useNavigate()
    const location = useLocation()
    const handleOpenMenu = () : void => {
        if(isOpen){
            close()
        }
        else {
            open()
        }
        
        
    }

    const handleLogOut = () : void => {

        localStorage.removeItem('loginSession')
        navigate('/login')
    }

    const handleGoBack = () : void => {

        navigate(-1)
    }


    return (

        <>

        <HeaderStyled openmenu={isOpen}>
            <div className="header-content">
                { location.pathname.split('/').length > 2 ? <GoBackIcon onClick={handleGoBack}/> :
                
                    <MenuIcon  className="header-content__menu-icon" onClick={handleOpenMenu}/>
        
                }
                
                <Styledh1>{title}</Styledh1>
                <div className="header-content__right-icons">
                    <EmailIcon />
                    <BellIcon />
                    <LogoutIcon  onClick={handleLogOut}/>
                    
                </div>
            </div>
            

        </HeaderStyled>
        
        </>
    )
}