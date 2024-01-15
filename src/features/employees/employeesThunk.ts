import { createAsyncThunk } from "@reduxjs/toolkit";
import employeesData from '../../data/employeesData.json';
import { EmployeeInterface } from "../../interfaces/Employee/EmployeeInterface";


export const getEmployeesThunk = createAsyncThunk<EmployeeInterface[], void, { state: any, rejectValue: string }>("employees/getEmployees", async () => {

    const response = await fetch(import.meta.env.VITE_APIURL + 'users', {
    
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('loginToken')}`,
            "Content-Type": "application/json"
        }
    })

    return response.json()
})