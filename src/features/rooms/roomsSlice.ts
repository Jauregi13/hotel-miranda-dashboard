import { createSlice } from "@reduxjs/toolkit";
import { getRoomsThunk } from './roomsThunk'
import { RoomSliceInterface } from "../../interfaces/RoomSliceInterface";
import { StatusSlice } from "../../interfaces/types";
import { RoomInterface } from "../../interfaces/RoomInterfaces";

const initialState: RoomSliceInterface = {
    data: [],
    status: StatusSlice.idle,
    error: undefined
}



export const RoomsSlice = createSlice({

    name: "rooms",
    initialState: initialState,
    reducers : {

    },
    extraReducers: (builder) => {
        builder.addCase(getRoomsThunk.pending, (state,action): void => {
            state.status = StatusSlice.pending
        })
        .addCase(getRoomsThunk.rejected, (state,action): void=> {
            state.status = StatusSlice.rejected
            state.error = action.error.message
        })
        .addCase(getRoomsThunk.fulfilled, (state,action): void => {
            state.status = StatusSlice.fulfilled
            state.data = action.payload
        })
    }
})

export const getAllRoomsData = (state) : RoomInterface[] => state.rooms.data
export const getRoomsStatus = (state) => state.rooms.status
export const getRoomsError = (state) => state.rooms.error