import { createSlice } from "@reduxjs/toolkit";
import { getBookingsThunk } from "./bookingsThunk";



export const BookingsSlice = createSlice({

    name: 'bookings',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {

        getBookingById: (state,action) => {
            let booking = state.data.filter((booking) => booking.id === action.payload)
            return booking
            
        }

    },
    extraReducers: (builder) => {

        builder.addCase(getBookingsThunk.pending, (state,action) => {

            state.status = 'pending'
        })
        .addCase(getBookingsThunk.rejected, (state,action) => {
            state.status = 'rejected'
            state.error = action.error.message
        })
        .addCase(getBookingsThunk.fulfilled, (state,action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })
    }

})

export const getBookingsData = (state) => state.bookings.data
export const getBookingsStatus = (state) => state.bookings.status
export const getBookingsError = (state) => state.bookings.error