import { createAsyncThunk } from "@reduxjs/toolkit";
import bookings from './../../data/bookingsData.json';



export const getBookingsThunk = createAsyncThunk('bookings/getBookings', () => {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(bookings)
        },200)
    })

})