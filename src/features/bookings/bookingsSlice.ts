import { createSlice } from "@reduxjs/toolkit";
import { getBookingByIdThunk, getBookingsThunk, updateBooking } from "./bookingsThunk";
import { BookingSliceInterface } from "../../interfaces/Booking/BookingSliceInterface";
import { StatusSlice } from "../../interfaces/types";
import { BookingInterface, BookingUpdateInterface } from "../../interfaces/Booking/BookingInterface";
import { RootState } from "../../app/store";


const initialState : BookingSliceInterface = {

    data: [],
    bookingToUpdate: undefined,
    bookingUpdated: false,
    status: StatusSlice.idle,
    error: undefined
}


export const BookingsSlice = createSlice({

    name: 'bookings',
    initialState: initialState,
    reducers: {

        clearBooking: (state) => {

            state.status = StatusSlice.idle
            state.bookingToUpdate = undefined
            state.bookingUpdated = false
        },
        bookingIsupdated: (state) => {
            state.bookingUpdated = true
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
            state.bookingToUpdate = action.payload
        })

        builder.addCase(updateBooking.pending, (state,action) => {
            
            state.status = StatusSlice.pending
        })
        .addCase(updateBooking.rejected, (state,action) => {

            state.status = StatusSlice.rejected
            state.error = action.error.message
        })
        .addCase(updateBooking.fulfilled, (state,action) => {

            state.status = StatusSlice.fulfilled
        })
    }

})

export const getBookingsData = (state: RootState): BookingInterface[] => state.bookings.data
export const getBookingData = (state: RootState): BookingInterface | undefined => state.bookings.bookingToUpdate
export const getBookingsStatus = (state: RootState) => state.bookings.status
export const getBookingsError = (state: RootState) => state.bookings.error
export const bookingIsUpdated = (state: RootState) => state.bookings.bookingUpdated
export const {clearBooking, bookingIsupdated } = BookingsSlice.actions