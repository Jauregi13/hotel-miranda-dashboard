import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookingInterface } from "../../interfaces/Booking/BookingInterface";



export const getBookingsThunk = createAsyncThunk<BookingInterface[], void>('bookings/getBookings', async () => {


    const response = await fetch(import.meta.env.VITE_APIURL + 'bookings', {
    
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('loginToken')}`,
            "Content-Type": "application/json"
        }
    })

    return response.json()    

})