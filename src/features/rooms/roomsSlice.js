import { createSlice } from "@reduxjs/toolkit";
import { getRoomsThunk } from "./roomsThunk";



export const RoomsSlice = createSlice({

    name: "rooms",
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(getRoomsThunk.pending, (state,action) => {
            state.status = 'pending'
        })
        .addCase(getRoomsThunk.rejected, (state,action) => {
            state.status = 'rejected'
            state.error = action.error.message
        })
        .addCase(getRoomsThunk.fulfilled, (state,action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })
    }
})

export const getAllRoomsData = (state) => state.rooms.data
export const getRoomsStatus = (state) => state.rooms.status
export const getRoomsError = (state) => state.rooms.error