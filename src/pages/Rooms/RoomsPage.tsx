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
import roomImage from './../../assets/hotel-room.jpg'
import { useEffect, useState } from "react"
import { getAllRoomsData, getRoomsError, getRoomsStatus } from "../../features/rooms/roomsSlice"
import { getRoomsThunk } from "../../features/rooms/roomsThunk"
import { RoomInterface } from "../../interfaces/Room/RoomInterface"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { StatusSlice } from "../../interfaces/types"


export const RoomsPage = () => {

    const dispatch = useAppDispatch()
    const roomsStatus = useAppSelector<StatusSlice>(getRoomsStatus)
    const roomsAll = useAppSelector<RoomInterface[]>(getAllRoomsData)
    const roomsError = useAppSelector<string | undefined>(getRoomsError)
    const [roomList,setRoomList] = useState<RoomInterface[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [orderValue,setOrderValue] = useState<string>('room_number')
    const [tabActive, setTabActive] = useState('all')

    useEffect(() => {
        console.log(roomsStatus);
        switch (roomsStatus) {
            case 'idle':
                dispatch(getRoomsThunk())
                
                break;
            case 'pending':
                setLoading(true)
                
                break;
        
            case 'rejected':
                setLoading(false)
                
                
                console.log(roomsError);
                
                break;
            
            case 'fulfilled':
                console.log(roomsAll);
                
                setRoomList(roomsAll)
                handleOrderRoom(roomsAll,orderValue)
                setLoading(false)

                break;

        }



    },[dispatch,roomsStatus,roomsAll])

    const handleFilter = (type: string) => {

        let roomsFilter : RoomInterface[] = [];

        if(type === 'all'){
            roomsFilter = roomsAll;
        }
        else if(type === 'available'){
            roomsFilter = roomsAll.filter((room: RoomInterface) => room.available);
        }
        else if(type === 'booked'){
            roomsFilter = roomsAll.filter((room: RoomInterface) => !room.available);
        }

        setRoomList(roomsFilter);
        setTabActive(type)
        handleOrderRoom(roomsFilter, 'room_number')
        
    }

    const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

        handleOrderRoom(roomList,event.target.value)

    }

    const handleOrderRoom = (roomList: RoomInterface[], orderType: string) => {

        const orderList = [...roomList]
        setOrderValue(orderType)

        switch (orderType) {

            case 'room_number':

                orderList.sort((a: RoomInterface,b: RoomInterface) => {

                    let firstId = parseInt(a.room_number);
                    let secondId = parseInt(b.room_number);

                   return firstId-secondId;
                })

                break;
            
            case 'available':

                orderList.sort((a: RoomInterface,b: RoomInterface) => {

                    if(a.available && !b.available){
                        return -1;
                    }
                    else if(b.available && !a.available){
                        return 1;
                    }
                    return 0;
                })
                
                break;
            
            case 'booked':

                orderList.sort((a: RoomInterface,b: RoomInterface) => {

                    if(!a.available && b.available){
                        return -1;
                    }
                    else if(!b.available && a.available){
                        return 1;
                    }
                    return 0;
                })

                break;

            case 'lower':

                orderList.sort((a: RoomInterface,b: RoomInterface) => {

                    return a.price - b.price;
                })

                break;

            case 'higher':

                orderList.sort((a: RoomInterface,b: RoomInterface) => {

                    return b.price - a.price;
                })
        }

        setRoomList(orderList);

    }

    return (

        <>
        <RoomsPageStyled>

            <TabsWithOptionsStyled>
                <TabsStyled>
                    <li onClick={() => handleFilter('all')} className={tabActive === 'all' ? 'active' : undefined }>All Rooms</li>
                    <li onClick={() => handleFilter('available')} className={tabActive === 'available' ? 'active' : undefined }>Available Rooms</li>
                    <li onClick={() => handleFilter('booked')} className={tabActive === 'booked' ? 'active' : undefined }>Booked Rooms</li>
                </TabsStyled>
                <OptionsStyled>
                    <ButtonStyled status="create">+ New Room</ButtonStyled>
                    <SelectStyled onChange={handleOrderChange} value={orderValue}>
                        <option value='room_number'>Room number</option>
                        <option value="available">Status Available</option>
                        <option value="booked">Status Booked</option>
                        <option value="lower">Lower Price</option>
                        <option value="higher">Higher Price</option>
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
                        roomList.map((room: RoomInterface) => (

                            <tr key={room.roomId}>
                                <td><RoomName id={room.roomId} number={room.room_number} image={roomImage}/></td>
                                <td><p>{room.room_type}</p></td>
                                <td><p>
                                        {room.amenities.join(', ')}
                                    </p>
                                </td>
                                <td><p>${room.price}/night</p></td>
                                <td><p>${(room.price - (room.price * room.offer/100)).toFixed(2)}/night</p></td>
                                <td><ButtonStyled status={room.available ? 'Available': 'Booked'}>{room.available ? 'Available' : 'Booked'}</ButtonStyled></td>
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