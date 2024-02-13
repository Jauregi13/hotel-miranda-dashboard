import { createSlice } from "@reduxjs/toolkit";
import { getRoomByIdThunk, getRoomsThunk } from './roomsThunk'
import { RoomSliceInterface } from "../../interfaces/Room/RoomSliceInterface";
import { StatusSlice } from "../../interfaces/types";
import { RoomInterface } from "../../interfaces/Room/RoomInterface";
import { RootState } from "../../app/store";

const initialState: RoomSliceInterface = {

    data: [],
    actualRoom: undefined,
    roomUpdated: false,
    status: StatusSlice.idle,
    error: undefined
}



export const RoomsSlice = createSlice({

    name: "rooms",
    initialState: initialState,
    reducers : {

        clearRoom : (state) => {
            state.status = StatusSlice.idle
            state.actualRoom = undefined
            state.roomUpdated = false
        }
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
        .addCase(getRoomByIdThunk.pending, (state,action) =>{
            state.status = StatusSlice.pending
        })
        .addCase(getRoomByIdThunk.rejected, (state,action) => {
            state.status = StatusSlice.rejected
            state.error = action.error.message
        })
        .addCase(getRoomByIdThunk.fulfilled, (state,action) => {
            state.status = StatusSlice.fulfilled
            state.actualRoom = action.payload
        })
    }
})

export const getAllRoomsData = (state: RootState) : RoomInterface[] => state.rooms.data
export const getRoomsStatus = (state: RootState) : StatusSlice => state.rooms.status
export const getRoomsError = (state: RootState) : string | undefined => state.rooms.error
export const getRoomToUpdate = (state: RootState) => state.rooms.actualRoom
export const {clearRoom} = RoomsSlice.actions