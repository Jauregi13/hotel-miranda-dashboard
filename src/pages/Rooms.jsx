import { ButtonStyled } from "../components/ButtonStyled"
import { RoomName } from "../components/RoomName/RoomName"
import { TableStyled } from "../components/Table/TableStyled"
import { TBodyStyled } from "../components/Table/TbodyStyled"
import { TheadStyled } from "../components/Table/TheadStyled"


export const Rooms = () => {

    return (

        <>
        <TableStyled>
            <TheadStyled>
                <tr>
                    <th>Room Name</th>
                    <th>Room Type</th>
                    <th>Amenities</th>
                    <th>Price</th>
                    <th>Offer Price</th>
                    <th>Status</th>
                </tr>
                
            </TheadStyled>
            <TBodyStyled>
                <tr>
                    <td><RoomName /></td>
                    <td><p>Double Bed</p></td>
                    <td><p>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</p></td>
                    <td><p>$145/night</p></td>
                    <td><p>$120/night</p></td>
                    <td><ButtonStyled status="available">Available</ButtonStyled></td>
                </tr>
                <tr>
                    <td><RoomName /></td>
                    <td><p>Double Bed</p></td>
                    <td><p>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</p></td>
                    <td><p>$145/night</p></td>
                    <td><p>$120/night</p></td>
                    <td><ButtonStyled status="booked-rooms">Booked</ButtonStyled></td>                    
                </tr>
            </TBodyStyled>
        </TableStyled>
        
        </>
    )
}