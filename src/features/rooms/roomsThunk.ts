import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomInterface } from "../../interfaces/Room/RoomInterface";


export const getRoomsThunk = createAsyncThunk<RoomInterface[],void, { state: any, rejectValue: string }>("rooms/getRooms", async() => {
    
    const response = await fetch(import.meta.env.VITE_APIURL + 'rooms', {
        
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('loginToken')}`,
            "Content-Type": "application/json"
        }
    })
    
    return response.json()
       

})


export const getRoomByIdThunk = createAsyncThunk<RoomInterface,string>("rooms/getRoomById", async(id) => {

    const response = await fetch(import.meta.env.VITE_APIURL + 'rooms/'+id, {
        
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('loginToken')}`,
            "Content-Type": "application/json"
        }
    })    

    return response.json()
})