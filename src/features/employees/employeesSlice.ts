import { createSlice } from "@reduxjs/toolkit";
import { getEmployeesThunk } from "./employeesThunk";
import { EmployeeSliceInterface } from "../../interfaces/Employee/EmployeeSliceInterface";
import { StatusSlice } from "../../interfaces/types";
import { RootState } from "../../app/store";
import { EmployeeInterface } from "../../interfaces/Employee/EmployeeInterface";


const initialState: EmployeeSliceInterface = {

    data: [],
    status: StatusSlice.idle,
    error: undefined
}

export const EmployeesSlice = createSlice({

    name: "employees",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(getEmployeesThunk.pending, (state,action): void => {
            state.status = StatusSlice.pending;
        })
        .addCase(getEmployeesThunk.rejected, (state,action): void=> {
            state.status = StatusSlice.rejected;
            state.error = action.error.message;
        })
        .addCase(getEmployeesThunk.fulfilled, (state,action): void => {
            state.status = StatusSlice.fulfilled;
            state.data = action.payload;
        })
    }

})

export const getEmployeesData = (state: RootState): EmployeeInterface[] => state.employees.data;
export const getEmployeesStatus = (state: RootState) => state.employees.status;
export const getEmployeesError = (state: RootState) => state.employees.error;