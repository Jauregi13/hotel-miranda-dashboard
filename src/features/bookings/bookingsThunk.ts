import { createAsyncThunk } from "@reduxjs/toolkit";
import bookingsData from '../../data/bookingsData.json';
import { BookingInterface } from "../../interfaces/Booking/BookingInterface";
import { Status } from "../../interfaces/types";



export const getBookingsThunk = createAsyncThunk<BookingInterface[], void>('bookings/getBookings', () => {

    return new Promise((resolve) => {

        const bookings : BookingInterface[] = []
        setTimeout(() => {
            bookingsData.forEach((booking) => {
                bookings.push({
                    id: booking.id,
                    guest: booking.guest,
                    order_date: new Date(booking.order_date),
                    check_in: new Date(booking.check_in),
                    check_out: new Date(booking.check_out),
                    special_request: booking.special_request,
                    room_type: {
                        id: booking.room_type.id
                    },
                    status: booking.status as Status.check_in | Status.check_out | Status.in_progress

                })
            })
            resolve(bookings)
        },200)
    })

})