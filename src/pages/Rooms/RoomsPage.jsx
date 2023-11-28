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
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRoomsData, getRoomsStatus } from "../../features/rooms/roomsSlice"
import { getRoomsThunk } from "../../features/rooms/roomsThunk"


export const RoomsPage = () => {

    const dispatch = useDispatch()
    const roomsStatus = useSelector(getRoomsStatus)
    const rooms = useSelector(getRoomsData)
    const [roomList,setRoomList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        switch (roomsStatus) {
            case 'idle':
                dispatch(getRoomsThunk())
                
                break;
            case 'pending':
                setLoading(true)
                
                break;
        
            case 'rejected':
                setLoading(false)
                break;
            
            case 'fulfilled':

                setRoomList(rooms)
                setLoading(false)

                break;

        }



    },[dispatch,roomsStatus,rooms])

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

            { loading ? <p>Loading...</p> :

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
                    
                    {
                        roomList.map((room) => (

                            <tr key={room.id}>
                                <td><RoomName id={room.id} number={room.room_number}/></td>
                                <td><p>{room.room_type}</p></td>
                                <td><p>
                                        {room.amenities.join(', ')}
                                    </p>
                                </td>
                                <td><p>${room.price}/night</p></td>
                                <td><p>${(room.price - (room.price * room.offer/100)).toFixed(2)}/night</p></td>
                                <td><ButtonStyled status={room.status}>{room.status}</ButtonStyled></td>
                            </tr>
                        ))
                        
                    }
                        
                        
                            
                        
                    
                </TBodyStyled>
            </TableStyled>
            }
        </RoomsPageStyled>
        
        
        </>
    )
}