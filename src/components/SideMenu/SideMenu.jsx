import { SideMenuStyled } from "./SideMenuStyled"
import logo from './../../assets/logo.png'
import { Styledh1, Styledh2 } from "../headings"
import { NavLinkStyled } from "./NavLinkStyled"
import { BookingsIcon, ConciergeIcon, DashboardIcon, GuestIcon, RoomIcon} from "../IconsStyled"
import { NavStyled } from "./NavStyled"
import { useMenuOpenContext } from "../MenuOpenContext"

export const SideMenu = () => {

    const {isOpen} = useMenuOpenContext()

    return (

        <>
        <SideMenuStyled openmenu={isOpen}>
            <div className="logo">
                <img src={logo} alt="Logo" width={47} height={57}/>
                <div className="logo__text">
                    <Styledh1>travl</Styledh1>
                    <Styledh2>Hotel Admin Dashboard</Styledh2>
                </div>
                
            </div>
            
            <NavStyled>
                <ul>
                    <li>
                        <NavLinkStyled to={'/'}>
                            <DashboardIcon />
                            <span>Dashboard</span>
                        </NavLinkStyled>
                    </li>
                    <li>
                        <NavLinkStyled to={'/rooms'}>
                            <RoomIcon />
                            <span>Rooms</span>
                        </NavLinkStyled>
                    </li>
                    <li>
                        <NavLinkStyled to={'/bookings'}>
                            <BookingsIcon />
                            <span>Bookings</span>
                        </NavLinkStyled>
                    </li>
                    <li>
                        <NavLinkStyled to={'/contact'}>
                            <GuestIcon />
                            <span>Contact</span>
                        </NavLinkStyled>
                    </li>
                    <li>
                        <NavLinkStyled to={'/users'}>
                            <ConciergeIcon />
                            <span>Users</span>
                        </NavLinkStyled>
                    </li>
                    
                </ul>
                
            </NavStyled>

        </SideMenuStyled>
        
        
        
        </>
    )

}