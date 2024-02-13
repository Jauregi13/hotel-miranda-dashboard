import { RoomInterface } from "./RoomInterface";
import { StatusSlice } from "../types";


export interface RoomSliceInterface {

    data: RoomInterface[]
    actualRoom: RoomInterface | undefined
    roomUpdated: boolean
    status: StatusSlice
    error: string | undefined
}