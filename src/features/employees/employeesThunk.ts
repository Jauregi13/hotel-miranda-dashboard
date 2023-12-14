import { createAsyncThunk } from "@reduxjs/toolkit";
import employeesData from '../../data/employeesData.json';
import { EmployeeInterface } from "../../interfaces/Employee/EmployeeInterface";
import { Status } from "../../interfaces/types";


export const getEmployeesThunk = createAsyncThunk<EmployeeInterface[], void, { state: any, rejectValue: string }>("employees/getEmployees", () => {

    const employees: EmployeeInterface[] = []
    return new Promise((resolve) => {
        setTimeout(() => {
            employeesData.forEach((employee) => {
                employees.push({
                    name: employee.name,
                    id: employee.id,
                    email: employee.email,
                    start_date: employee.start_date,
                    description: employee.description,
                    contact: employee.contact,
                    status: employee.status as Status.active | Status.inactive
                })
            })
            resolve(employees)
        },1000)
    })
})