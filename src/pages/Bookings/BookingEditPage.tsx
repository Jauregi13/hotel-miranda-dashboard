import { FormEvent, useEffect, useMemo, useState } from "react"
import { InputStyled } from "../../components/Inputs/InputStyled"
import { Styledh1 } from "../../components/headings"
import { BookingsEditPageStyled } from "./BookingsEditPageStyled"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useParams } from "react-router"
import { getBookingByIdThunk } from "../../features/bookings/bookingsThunk"
import { clearBooking, getBookingData, getBookingsStatus } from "../../features/bookings/bookingsSlice"
import { BookingInterface } from "../../interfaces/Booking/BookingInterface"
import { StatusSlice } from "../../interfaces/types"
import { ButtonStyled } from "../../components/ButtonStyled"
import { InputText } from "../../components/Inputs/InputText"
import { TextArea } from "../../components/Inputs/TextArea"
import { Select } from "../../components/Inputs/Select"




export const BookingEditPage = () => {

    const dispatch = useAppDispatch()
    const getBooking = useAppSelector<BookingInterface | undefined>(getBookingData)
    const bookingStatus = useAppSelector<StatusSlice>(getBookingsStatus)
    const [booking,setBooking] = useState<BookingInterface>()
    const {id} = useParams()

    useEffect(() => {
        
        dispatch(clearBooking())

    },[])

    useEffect(() => {

        if(id !== undefined && bookingStatus === 'idle'){
            
            dispatch(getBookingByIdThunk(id))
        }

        
    },[dispatch,bookingStatus])

    useMemo(() => {

        setBooking(getBooking)                

    },[getBooking])

    const handleUpdateBooking = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formBooking = event.target as HTMLFormElement
        
        const booking = {
            bookingId: id,
            guest: formBooking.guest_name.value,
            guestImage: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/556.jpg',
            order_date: formBooking.order_date.value,
            check_in: formBooking.check_in.value,
            check_out: formBooking.check_out.value,
            special_request: formBooking.special_request.value,
            status: 'Check In'
        }

        console.log(booking);
        

        
        
    }



    return (

        <BookingsEditPageStyled>

            <Styledh1>Update booking</Styledh1>
            <form method="post" onSubmit={handleUpdateBooking}>

                <InputText value={booking?.guest} label="Guest Name" name="guest_name" type="text"/>

                <InputText value={booking?.order_date ? new Date(booking!.order_date).toISOString().split('T')[0] : ''} 
                            name="order_date" label="Order Date" type="date" />

                <InputText value={booking?.check_in ? new Date(booking!.check_in).toISOString().split('T')[0] : ''} 
                            name="check_in" label="Check In" type="date" />

                <InputText value={booking?.check_out ? new Date(booking!.check_out).toISOString().split('T')[0] : ''} 
                            name="check_out" label="Check Out" type="date" />
                
                <TextArea value={booking?.special_request} name="special_request" label="Special Request" />

                <Select value={booking?.status} label="Status" name="status" 
                        options={[
                            {
                                value: 'Check_in',
                                name: 'Check In'
                            },
                            {
                                value: 'check_out',
                                name: 'Check Out'
                            },
                            {
                                value: 'in_progress',
                                name: 'In Progress'
                            }
                        ]}/>
                <InputStyled>
                    <ButtonStyled type="submit" status="update">UPDATE</ButtonStyled>
                </InputStyled>
                

            </form>


        </BookingsEditPageStyled>


    )
}