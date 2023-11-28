import { createSlice } from "@reduxjs/toolkit";
import { getEmployeesThunk } from "./employeesThunk";



export const EmployeesSlice = createSlice({

    name: "employees",
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {

        builder.addCase(getEmployeesThunk.pending, (state,action) => {
            state.status = 'pending';
        })
        .addCase(getEmployeesThunk.rejected, (state,action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
        .addCase(getEmployeesThunk.fulfilled, (state,action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
    }

})

export const getEmployeesData = (state) => state.employees.data;
export const getEmployeesStatus = (state) => state.employees.status;
export const getEmployeesError = (state) => state.employees.error;