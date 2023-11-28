import { createAsyncThunk } from "@reduxjs/toolkit";
import employees from './../../data/employeesData.json';


export const getEmployeesThunk = createAsyncThunk("employees/getEmployees", () => {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(employees)
        },1000)
    })
})