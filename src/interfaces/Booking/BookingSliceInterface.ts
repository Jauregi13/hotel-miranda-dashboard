import { StatusSlice } from "../types";
import { BookingInterface, BookingUpdateInterface } from "./BookingInterface";



export interface BookingSliceInterface {

    data: BookingInterface[]
    bookingToUpdate: BookingInterface | undefined
    bookingUpdated: boolean
    status: StatusSlice
    error: string | undefined
}