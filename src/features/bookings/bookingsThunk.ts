import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookingInterface, BookingUpdateInterface } from "../../interfaces/Booking/BookingInterface";



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

export const getBookingByIdThunk = createAsyncThunk<BookingInterface, string>('bookings/getBookingById', async (id) => {


    const response = await fetch(import.meta.env.VITE_APIURL + 'bookings/'+id, {
    
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('loginToken')}`,
            "Content-Type": "application/json"
        }
    })    

    return response.json() 

})

export const updateBooking = createAsyncThunk<string, BookingUpdateInterface>('bookings/updateBooking', async (booking) => {

    const response = await fetch(import.meta.env.VITE_APIURL+ 'bookings', {
    
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('loginToken')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(booking)
    }) 

    return response.json()
})

