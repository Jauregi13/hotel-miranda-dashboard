import { StatusSlice } from "../types";
import { BookingInterface } from "./BookingInterface";



export interface BookingSliceInterface {

    data: BookingInterface[]
    actualBooking: BookingInterface | undefined
    status: StatusSlice
    error: string | undefined
}