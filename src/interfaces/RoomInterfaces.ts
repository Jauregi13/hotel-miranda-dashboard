import { Status } from "./types"



export interface RoomInterface {

    id: string
    room_number: string
    room_type: string
    description: string
    amenities: Array<string>
    cancellation: string
    price: number
    offer: number
    status: Status.available | Status.booked
}