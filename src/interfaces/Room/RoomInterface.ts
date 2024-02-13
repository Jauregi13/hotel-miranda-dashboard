

export interface RoomInterface {

    roomId: string
    room_number: string
    room_type: string
    description: string
    amenities: Array<string>
    cancellation: string
    price: number
    offer: number
    available: boolean
}