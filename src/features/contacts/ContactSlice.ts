import { createSlice } from "@reduxjs/toolkit";
import { ContactSliceInterface } from "../../interfaces/Contact/ContactSliceInterface";
import { StatusSlice } from "../../interfaces/types";
import { getContactsThunk } from "./ContactThunks";
import { RootState } from "../../app/store";
import { ContactInterface } from "../../interfaces/Contact/ContactInterface";


const initialState : ContactSliceInterface = {

    data: [],
    status: StatusSlice.idle,
    error: undefined
}



export const ContactsSlice = createSlice({

    name: 'contacts',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(getContactsThunk.pending, (state,action) => {
            state.status = StatusSlice.pending
        })
        .addCase(getContactsThunk.rejected, (state,action) => {
            state.status = StatusSlice.rejected
            state.error = action.error.message
        })
        .addCase(getContactsThunk.fulfilled, (state,action) => {
            state.status = StatusSlice.fulfilled
            state.data = action.payload
        })

    }

})

export const getContactsData = (state: RootState): ContactInterface[] => state.contacts.data
export const getContactsStatus = (state: RootState) : StatusSlice => state.contacts.status
export const getContactsError = (state : RootState) : string | undefined => state.contacts.error