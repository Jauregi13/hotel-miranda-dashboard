import { HeaderStyled } from "./HeaderStyled"
import { Styledh1 } from "../headings"
import { BellIcon, EmailIcon, LogoutIcon, MenuIcon } from "../IconsStyled"
import { useMenuOpenContext } from "../MenuOpenContext"
import { useNavigate } from "react-router-dom"


export const Header = (props) => {

    const {isOpen,open, close} = useMenuOpenContext()
    const navigate = useNavigate()

    const handleOpenMenu = () => {
        if(isOpen){
            close()
        }
        else {
            open()
        }
        
        
    }

    const handleLogOut = () => {

        localStorage.removeItem('loginSession')
        navigate('/login')
    }


    return (

        <>

        <HeaderStyled openmenu={isOpen}>
            <div className="header-content">
                <MenuIcon  className="header-content__menu-icon" onClick={handleOpenMenu}/>
                <Styledh1>{props.title}</Styledh1>
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