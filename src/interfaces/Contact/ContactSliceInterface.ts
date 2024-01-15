import { StatusSlice } from "../types";
import { ContactInterface } from "./ContactInterface";


export interface ContactSliceInterface {

    data: ContactInterface[]
    status: StatusSlice
    error: string | undefined
}