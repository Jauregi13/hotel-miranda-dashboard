import { createSlice } from "@reduxjs/toolkit";
import { getRoomsThunk } from './roomsThunk'
import { RoomSliceInterface } from "../../interfaces/Room/RoomSliceInterface";
import { StatusSlice } from "../../interfaces/types";
import { RoomInterface } from "../../interfaces/Room/RoomInterface";
import { RootState } from "../../app/store";

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

export const getAllRoomsData = (state: RootState) : RoomInterface[] => state.rooms.data
export const getRoomsStatus = (state: RootState) => state.rooms.status
export const getRoomsError = (state: RootState) => state.rooms.error