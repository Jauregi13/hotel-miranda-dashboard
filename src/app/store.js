import { configureStore } from "@reduxjs/toolkit";
import { RoomsSlice } from "../features/rooms/roomsSlice";
import { EmployeesSlice } from "../features/employees/employeesSlice";



export const store = configureStore({
    reducer: {
        rooms: RoomsSlice.reducer,
        employees: EmployeesSlice.reducer
    }
})