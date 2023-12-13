import { RoomInterface } from "./RoomInterfaces";
import { StatusSlice } from "./types";


export interface RoomSliceInterface {

    data: RoomInterface[]
    status: StatusSlice
    error: string | undefined
}