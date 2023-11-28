import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from './../../data/roomsData.json';


export const getRoomsThunk = createAsyncThunk("rooms/getRooms", () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(rooms)
        },1000)
        
    })
   

})