import { Status } from "../types"

interface RoomId {
    room_type: string
}

export interface BookingInterface {

    bookingId: string
    guest: string
    guestImage: string
    order_date: Date
    check_in: Date
    check_out: Date
    special_request: string
    room: RoomId
    status: Status.check_in | Status.check_out | Status.in_progress
    [key: string] : string | Date | RoomId

}

export interface BookingUpdateInterface {

    bookingId: string
    guest?: string
    guestImage?: string
    order_date?: Date
    check_in?: Date
    check_out?: Date
    special_request?: string
    room?: RoomId
    status?: Status.check_in | Status.check_out | Status.in_progress
    [key: string] : string | Date | RoomId | undefined
}