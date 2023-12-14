import { StatusSlice } from "../types";
import { EmployeeInterface } from "./EmployeeInterface";


export interface EmployeeSliceInterface {

    data: EmployeeInterface[]
    status: StatusSlice
    error: string | undefined
}