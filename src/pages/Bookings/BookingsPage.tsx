import { ButtonStyled } from "../../components/ButtonStyled"
import { ImageWithName } from "../../components/ImageWithName/ImageWithName"
import { SelectStyled } from "../../components/SelectStyled"
import { TableStyled } from "../../components/Table/TableStyled"
import { TBodyStyled } from "../../components/Table/TbodyStyled"
import { TheadStyled } from "../../components/Table/TheadStyled"
import { OptionsStyled } from "../../components/TabsWithOptions/OptionsStyled"
import { TabsStyled } from "../../components/TabsWithOptions/TabsStyled"
import { TabsWithOptionsStyled } from "../../components/TabsWithOptions/TabsWithOptionsStyled"
import { BookingsPageStyled } from "./BookingsPageStyled"
import guestImage from './../../assets/founder.png'
import { getBookingsData, getBookingsError, getBookingsStatus } from "../../features/bookings/bookingsSlice"
import { useEffect, useState } from "react"
import { getBookingsThunk } from "../../features/bookings/bookingsThunk"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { BookingInterface } from "../../interfaces/Booking/BookingInterface"
import { StatusSlice } from "../../interfaces/types"
import { ButtonEditDelete } from "../../components/ButtonEditDelete/ButtonEditDelete"



export const BookingsPage = () => {

    const dispatch = useAppDispatch()
    const navigate: NavigateFunction = useNavigate()
    const bookings = useAppSelector<BookingInterface[]>(getBookingsData)
    const bookingsStatus = useAppSelector<StatusSlice>(getBookingsStatus)
    const bookingsError = useAppSelector(getBookingsError)
    const [loading, setLoading] = useState<boolean>(false)
    const [bookingsList,setBookingsList] = useState<BookingInterface[]>([])
    const [tabActive, setTabActive] = useState<string>('all')
    const [orderValue, setOrderValue] = useState<string>('order_date')

    useEffect(() => {

        switch (bookingsStatus) {
            case 'idle':

                dispatch(getBookingsThunk())
                
                break;
            
            case 'pending':

                setLoading(true)
                break;

            case 'rejected':

                setLoading(false)
                break;
            
            case 'fulfilled':

                setLoading(false)
                setBookingsList(bookings)
                console.log(bookings);
                break;
        }


    },[dispatch,bookingsStatus,bookings])


    const handleFilter = (type: string) => {

        let bookingsFilter = [];
        let orderType = '';
        // definir tipo de ordenación a fecha reserva cuando se filtra por todas las reservas y las que están en progreso
        if(type === 'all' || type === 'In Progress'){
            orderType = 'order_date'
            
        }
        // el tipo de ordenación será check_in o check_out que será el valor de type
        else {
            orderType = type
        }


        if(type === 'all'){
            bookingsFilter = bookings
        }
        else {
            let typeFormatted : string | string[] = type
            if(type !== 'In Progress'){
                typeFormatted = type.split('_')
                typeFormatted = typeFormatted[0].charAt(0).toUpperCase() + typeFormatted[0].slice(1) + ' ' + typeFormatted[1].charAt(0).toUpperCase() + typeFormatted[1].slice(1)
            }
            bookingsFilter = bookings.filter((booking) => booking.status === typeFormatted)
        }
        setTabActive(type)
        setBookingsList(bookingsFilter)
        handleOrderBookings(bookingsFilter,orderType)

    }

    const handleOrderBookings = (bookingList: BookingInterface[], orderType : string) => {

        let orderBookingList = [...bookingList]
        setOrderValue(orderType)

        if(orderType === 'guest'){
            console.log('guest');
            orderBookingList.sort((a,b) => {
                if(a.guest > b.guest) {
                    return 1
                }
                else if(a.guest < b.guest){
                    return -1
                }
                return 0
            })
        }

        else {
            orderBookingList.sort((a: BookingInterface,b: BookingInterface) => {
                
                if(a[orderType] < b[orderType]){
                    return 1
                }
                else if(a[orderType] > b[orderType]){
                    return -1
                }
                return 0
            })
        }

        setBookingsList(orderBookingList)



    }

    const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

        handleOrderBookings(bookingsList, event.target.value)
    }


    return (

        <>
        <BookingsPageStyled>

            <TabsWithOptionsStyled>
                <TabsStyled>
                    <li onClick={() => handleFilter('all')} className={tabActive === 'all' ? 'active' : undefined }>All Bookings</li>
                    <li onClick={() => handleFilter('check_in')} className={tabActive === 'check_in' ? 'active' : undefined }>Check In</li>
                    <li onClick={() => handleFilter('check_out')} className={tabActive === 'check_out' ? 'active' : undefined }>Check Out</li>
                    <li onClick={() => handleFilter('In Progress')} className={tabActive === 'In Progress' ? 'active' : undefined }>In Progress</li>
                </TabsStyled>
                <OptionsStyled>
                    <ButtonStyled status="create">+ New Booking</ButtonStyled>
                    <SelectStyled value={orderValue} onChange={handleOrderChange}>
                        <option value='guest'>Guest</option>
                        <option value='order_date'>Order Date</option>
                        <option value='check_in'>Check In</option>
                        <option value='check_out'>Check Out</option>
                    </SelectStyled>
                </OptionsStyled>
            </TabsWithOptionsStyled>

            {
                loading ? <p>Loading...</p> :

                <TableStyled>
                <TheadStyled>
                    <tr>
                        <th>Guest</th>
                        <th>Order Date</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Special Request</th>
                        <th>Room Type</th>
                        <th>Status</th>
                    </tr>
                </TheadStyled>
                <TBodyStyled>

                    {
                        bookingsList.map((booking) => (

                        <tr key={booking.id} onClick={() => navigate(`/bookings/${booking.id}`)}>
                            <td>
                                <ImageWithName src={guestImage} name={booking.guest} id={booking.id} type="booking"/>
                            </td>
                            <td><p>{booking.order_date.toDateString()}</p></td>
                            <td>
                                <p>{booking.check_in.toDateString()}</p>
                                <p>9.46 PM</p>
                            </td>
                            <td>
                                <p>{booking.check_out.toDateString()}</p>
                                <p>6.12 PM</p>
                            </td>
                            <td>
                                <ButtonStyled request="true">View Notes</ButtonStyled>
                            </td>
                            <td><p>{booking.room_type.id}</p></td>
                            <td>
                                <ButtonStyled status={booking.status}>{booking.status}</ButtonStyled>
                            </td>
                            <td>
                                <ButtonEditDelete />
                            </td>
                        </tr>

                        ))
                    }
                    

                    
                    
                </TBodyStyled>
            </TableStyled>


            }

            
        </BookingsPageStyled>
            
        
        </>

    )
}