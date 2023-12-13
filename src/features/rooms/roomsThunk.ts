import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from './../../data/roomsData.json'
import { RoomInterface } from "../../interfaces/RoomInterfaces";


export const getRoomsThunk = createAsyncThunk<RoomInterface[],void, { state: any, rejectValue: string }>("rooms/getRooms", async() : Promise<RoomInterface[]> => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(rooms)
        },1000)
        
    })
   

})