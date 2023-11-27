import { ButtonStyled } from "../../components/ButtonStyled"
import { RoomName } from "../../components/RoomName/RoomName"
import { TableStyled } from "../../components/Table/TableStyled"
import { TBodyStyled } from "../../components/Table/TbodyStyled"
import { TheadStyled } from "../../components/Table/TheadStyled"
import { TabsStyled } from "../../components/TabsWithOptions/TabsStyled"
import { TabsWithOptionsStyled } from "../../components/TabsWithOptions/TabsWithOptionsStyled"
import { OptionsStyled } from "../../components/TabsWithOptions/OptionsStyled"
import { SelectStyled } from "../../components/SelectStyled"
import { RoomsPageStyled } from "./RoomsPageStyled"


export const RoomsPage = () => {

    return (

        <>
        <RoomsPageStyled>

            <TabsWithOptionsStyled>
                <TabsStyled>
                    <li>All Rooms</li>
                    <li>Available Rooms</li>
                    <li>Booked Rooms</li>
                </TabsStyled>
                <OptionsStyled>
                    <ButtonStyled status="create">+ New Room</ButtonStyled>
                    <SelectStyled>
                        <option value='newest'>Newest</option>
                    </SelectStyled>
                </OptionsStyled>
            </TabsWithOptionsStyled>

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
        </RoomsPageStyled>
        
        
        </>
    )
}