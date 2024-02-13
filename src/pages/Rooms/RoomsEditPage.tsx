import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { InputText } from "../../components/Inputs/InputText"
import { Styledh1 } from "../../components/headings"
import { clearRoom, getRoomToUpdate, getRoomsError, getRoomsStatus } from "../../features/rooms/roomsSlice"
import { RoomInterface } from "../../interfaces/Room/RoomInterface"
import { RoomsEditPageStyled } from "./RoomsEditPageStyled"
import { useEffect, useMemo, useState } from "react"
import { StatusSlice } from "../../interfaces/types"
import { getRoomByIdThunk } from "../../features/rooms/roomsThunk"
import { Select } from "../../components/Inputs/Select"
import { TextArea } from "../../components/Inputs/TextArea"



export const RoomsEditPage = () => {

    const dispatch = useAppDispatch()
    const getRoom = useAppSelector<RoomInterface | undefined>(getRoomToUpdate)
    const roomsStatus = useAppSelector<StatusSlice>(getRoomsStatus)
    const roomError = useAppSelector<string | undefined>(getRoomsError)
    const {id} = useParams()
    const [room, setRoom] = useState<RoomInterface>()

    useEffect(() => {

        dispatch(clearRoom())
        
    },[])


    useEffect(() => {

        if(roomsStatus === 'idle' && id !== undefined){
            dispatch(getRoomByIdThunk(id))
        }

    },[dispatch,roomsStatus])


    useMemo(() => {
        console.log(getRoom);
        
        setRoom(getRoom)

    },[getRoom])


    return (

        <RoomsEditPageStyled>
            <Styledh1>Update room</Styledh1>
            <form method="post">

                <InputText value={room?.room_number} type="text" label="Room Number" name="room_number"/>
                
                <Select label="Room Type" name="room_type" value={room?.room_type} 
                    options={[
                        {
                            value: 'Single Bed',
                            name: 'Single Bed'
                        },
                        {
                            value: 'Double Bed',
                            name: 'Double Bed'
                        },
                        {
                            value: 'Double Superior',
                            name: 'Double Superior'
                        },
                        {
                            value: 'Suite',
                            name: 'Suite'
                        }
                    ]

                    }
                />

                <TextArea value={room?.description} label="Description" name="description"/>

            </form>

        </RoomsEditPageStyled>
    )
}