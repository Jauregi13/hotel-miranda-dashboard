import { configureStore } from "@reduxjs/toolkit";
import { RoomsSlice } from "../features/rooms/roomsSlice";
import { EmployeesSlice } from "../features/employees/employeesSlice";
import { BookingsSlice } from "../features/bookings/bookingsSlice";
import { ContactsSlice } from "../features/contacts/ContactSlice";



export const store = configureStore({
    reducer: {
        rooms: RoomsSlice.reducer,
        employees: EmployeesSlice.reducer,
        bookings: BookingsSlice.reducer,
        contacts: ContactsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch