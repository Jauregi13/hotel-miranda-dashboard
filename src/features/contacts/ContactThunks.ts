import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactInterface } from "../../interfaces/Contact/ContactInterface";




export const getContactsThunk = createAsyncThunk<ContactInterface[], void, { state: any, rejectValue: string }>('contacts/getContacts', async () => {


    const response = await fetch(import.meta.env.VITE_APIURL + 'contacts', {
    
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('loginToken')}`,
            "Content-Type": "application/json"
        }
    })

    return response.json()
})