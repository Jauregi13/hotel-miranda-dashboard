import { createSlice } from "@reduxjs/toolkit";
import { getBookingByIdThunk, getBookingsThunk } from "./bookingsThunk";
import { BookingSliceInterface } from "../../interfaces/Booking/BookingSliceInterface";
import { StatusSlice } from "../../interfaces/types";
import { BookingInterface } from "../../interfaces/Booking/BookingInterface";
import { RootState } from "../../app/store";


const initialState : BookingSliceInterface = {

    data: [],
    actualBooking: undefined,
    status: StatusSlice.idle,
    error: undefined
}


export const BookingsSlice = createSlice({

    name: 'bookings',
    initialState: initialState,
    reducers: {

        clearBooking: (state) => {

            state.status = StatusSlice.idle
            state.actualBooking = undefined
        }

    },
    extraReducers: (builder) => {

        builder.addCase(getBookingsThunk.pending, (state,action) => {

            state.status = StatusSlice.pending
        })
        .addCase(getBookingsThunk.rejected, (state,action) => {
            state.status = StatusSlice.rejected
            state.error = action.error.message
        })
        .addCase(getBookingsThunk.fulfilled, (state,action) => {
            state.status = StatusSlice.fulfilled
            state.data = action.payload
        })

        builder.addCase(getBookingByIdThunk.pending, (state,action) => {
            
            state.status = StatusSlice.pending
        })
        .addCase(getBookingByIdThunk.rejected, (state,action) => {

            state.status = StatusSlice.rejected
            state.error = action.error.message
        })
        .addCase(getBookingByIdThunk.fulfilled, (state,action) => {

            state.status = StatusSlice.fulfilled
            state.actualBooking = action.payload
        })
    }

})

export const getBookingsData = (state: RootState): BookingInterface[] => state.bookings.data
export const getBookingData = (state: RootState): BookingInterface | undefined => state.bookings.actualBooking
export const getBookingsStatus = (state: RootState) => state.bookings.status
export const getBookingsError = (state: RootState) => state.bookings.error
export const {clearBooking } = BookingsSlice.actions