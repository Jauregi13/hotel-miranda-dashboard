import { Status } from "../types"

interface RoomId {
    id: string
}

export interface BookingInterface {

    id: string
    guest: string
    order_date: Date
    check_in: Date
    check_out: Date
    special_request: string
    room_type: RoomId
    status: Status.check_in | Status.check_out | Status.in_progress
    [key: string] : string | Date | RoomId

}