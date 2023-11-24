import { HeaderStyled } from "./HeaderStyled"
import { Styledh1 } from "../headings"
import { BellIcon, EmailIcon, LogoutIcon, MenuIcon } from "../IconsStyled"
import { useMenuOpenContext } from "../MenuOpenContext"


export const Header = (props) => {

    const {isOpen,open, close} = useMenuOpenContext()

    const handleOpenMenu = () => {
        if(isOpen){
            close()
        }
        else {
            open()
        }
        
        
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
                    <LogoutIcon />
                    
                </div>
            </div>
            

        </HeaderStyled>
        
        </>
    )
}