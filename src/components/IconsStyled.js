import styled from "styled-components";
import { LuLayoutDashboard, LuCalendarCheck2 } from "react-icons/lu";
import { RiKey2Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { HiOutlinePuzzle } from "react-icons/hi";
import { HiMenuAlt2 } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";
import { GoBell } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";
import { LiaBedSolid } from "react-icons/lia";


const iconStyle = `

    width: 26px;
    height: 26px;

`

export const DashboardIcon = styled(LuLayoutDashboard)`

    ${iconStyle}

`;

export const RoomIcon = styled(RiKey2Line)`

    ${iconStyle}
    transform: rotate(135deg);
`

export const BookingsIcon = styled(LuCalendarCheck2)`

    ${iconStyle}

`

export const GuestIcon = styled(CiUser)`

    ${iconStyle}

`

export const ConciergeIcon = styled(HiOutlinePuzzle)`

    ${iconStyle}
`

export const MenuIcon = styled(HiMenuAlt2)`

    ${iconStyle}

`

export const LogoutIcon = styled(TbLogout)`

    ${iconStyle}
`

export const BellIcon = styled(GoBell)`

    ${iconStyle}

`
export const EmailIcon = styled(MdOutlineMailOutline)`

    ${iconStyle}

`

const KPIStyled = `

    background-color: #FFEDEC;
    padding: 1em;
    color: #E23428;
    border-radius: 8px;
`

export const BedIcon = styled(LiaBedSolid)`

    ${iconStyle}
    ${KPIStyled}


`