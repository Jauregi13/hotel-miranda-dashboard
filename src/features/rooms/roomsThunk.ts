import { createAsyncThunk } from "@reduxjs/toolkit";
import roomsData from './../../data/roomsData.json'
import { RoomInterface } from "../../interfaces/Room/RoomInterface";
import { Status } from "../../interfaces/types";


export const getRoomsThunk = createAsyncThunk<RoomInterface[],void, { state: any, rejectValue: string }>("rooms/getRooms", async() => {

    const rooms : RoomInterface[] = []
    return new Promise((resolve) => {
        setTimeout(() => {
            roomsData.forEach((room) => {
                rooms.push({
                    id: room.id,
                    number: room.room_number,
                    type: room.room_type,
                    description: room.description,
                    amenities: room.amenities,
                    cancellation: room.cancellation,
                    price: room.price,
                    offer: room.offer,
                    status: room.status as Status.available | Status.booked
                })
            })
            resolve(rooms)
        },200)
        
    })
   

})