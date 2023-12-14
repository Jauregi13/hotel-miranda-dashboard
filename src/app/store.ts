import { configureStore } from "@reduxjs/toolkit";
import { RoomsSlice } from "../features/rooms/roomsSlice";
import { EmployeesSlice } from "../features/employees/employeesSlice";



export const store = configureStore({
    reducer: {
        rooms: RoomsSlice.reducer,
        employees: EmployeesSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch