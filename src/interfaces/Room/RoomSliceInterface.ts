import { RoomInterface } from "./RoomInterface";
import { StatusSlice } from "../types";


export interface RoomSliceInterface {

    data: RoomInterface[]
    status: StatusSlice
    error: string | undefined
}