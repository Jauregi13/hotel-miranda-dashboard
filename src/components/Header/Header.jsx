import { HeaderStyled } from "./HeaderStyled"
import { Styledh1 } from "../headings"
import { BellIcon, EmailIcon, LogoutIcon, MenuIcon } from "../IconsStyled"


export const Header = (props) => {


    return (

        <>

        <HeaderStyled>
            <div className="header-content">
                <MenuIcon  className="header-content__menu-icon"/>
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