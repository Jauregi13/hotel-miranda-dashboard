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
import { getAllRoomsData, getRoomsStatus } from "../../features/rooms/roomsSlice"
import { getRoomsThunk } from "../../features/rooms/roomsThunk"
import { RoomInterface } from "../../interfaces/Room/RoomInterface"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { StatusSlice } from "../../interfaces/types"


export const RoomsPage = () => {

    const dispatch = useAppDispatch()
    const roomsStatus = useAppSelector<StatusSlice>(getRoomsStatus)
    const roomsAll = useAppSelector<RoomInterface[]>(getAllRoomsData)
    const [roomList,setRoomList] = useState<RoomInterface[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [orderValue,setOrderValue] = useState<string>('id')

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

                setRoomList(roomsAll)
                setLoading(false)

                break;

        }



    },[dispatch,roomsStatus,roomsAll])

    const handleFilter = (type: string) => {

        let roomsFilter : RoomInterface[] = [];
        setOrderValue('id');

        if(type === 'all'){
            roomsFilter = roomsAll;
        }
        else if(type === 'available'){
            roomsFilter = roomsAll.filter((room: RoomInterface) => room.status === 'Available');
        }
        else if(type === 'booked'){
            roomsFilter = roomsAll.filter((room: RoomInterface) => room.status === 'Booked');
        }

        setRoomList(roomsFilter);

        
    }

    const handleOrderRoom = (event: React.ChangeEvent<HTMLSelectElement>) => {

        console.log('ordenado');

        const orderList = [...roomList]
        setOrderValue(event.target.value)

        switch (event.target.value) {

            case 'id':

                orderList.sort((a: RoomInterface,b: RoomInterface) => {

                    let firstId = parseInt(a.id.substring(1,a.id.length));
                    let secondId = parseInt(b.id.substring(1,b.id.length));

                   return firstId-secondId;
                })

                break;
            
            case 'available':

                orderList.sort((a: RoomInterface,b: RoomInterface) => {

                    if(a.status === 'Available' && b.status !== 'Available'){
                        return -1;
                    }
                    else if(b.status === 'Available' && a.status !== 'Available'){
                        return 1;
                    }
                    return 0;
                })
                
                break;
            
            case 'booked':

                orderList.sort((a: RoomInterface,b: RoomInterface) => {

                    if(a.status === 'Booked' && b.status !== 'Booked'){
                        return -1;
                    }
                    else if(b.status === 'Booked' && a.status !== 'Booked'){
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
                    <li onClick={() => handleFilter('all')}>All Rooms</li>
                    <li onClick={() => handleFilter('available')}>Available Rooms</li>
                    <li onClick={() => handleFilter('booked')}>Booked Rooms</li>
                </TabsStyled>
                <OptionsStyled>
                    <ButtonStyled status="create">+ New Room</ButtonStyled>
                    <SelectStyled onChange={handleOrderRoom} value={orderValue}>
                        <option value='id'>Id of Room</option>
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

                            <tr key={room.id}>
                                <td><RoomName id={room.id} number={room.number} image={roomImage}/></td>
                                <td><p>{room.type}</p></td>
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