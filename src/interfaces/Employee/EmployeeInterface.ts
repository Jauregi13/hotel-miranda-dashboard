import { Status } from "../types"



export interface EmployeeInterface {

    name: string
    id: string
    email: string
    start_date: Date
    description: string
    contact: string
    status: Status.active | Status.inactive
}