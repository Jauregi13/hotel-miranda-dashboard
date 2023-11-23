import { ButtonStyled } from "../components/ButtonStyled"
import { TableStyled } from "../components/Table/TableStyled"
import { TBodyStyled } from "../components/Table/TbodyStyled"
import { TheadStyled } from "../components/Table/TheadStyled"




export const Bookings = () => {


    return (

        <>
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
                    <tr>
                        <td>
                            <p>Cahyadi Purnomo</p>
                            <p>#000123456</p>
                        </td>
                        <td><p>Oct 30th 2020 09:21 AM</p></td>
                        <td>
                            <p>Nov 2th, 2020</p>
                            <p>9.46 PM</p>
                        </td>
                        <td>
                            <p>Nov 4th, 2020</p>
                            <p>6.12 PM</p>
                        </td>
                        <td>
                            <ButtonStyled request="true">View Notes</ButtonStyled>
                        </td>
                        <td><p>Deluxe A - 02</p></td>
                        <td>
                            <ButtonStyled status="refund">Refund</ButtonStyled>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Cahyadi Purnomo</p>
                            <p>#000123456</p>
                        </td>
                        <td><p>Oct 30th 2020 09:21 AM</p></td>
                        <td>
                            <p>Nov 2th, 2020</p>
                            <p>9.46 PM</p>
                        </td>
                        <td>
                            <p>Nov 4th, 2020</p>
                            <p>6.12 PM</p>
                        </td>
                        <td>
                            <ButtonStyled request="true">View Notes</ButtonStyled>
                        </td>
                        <td><p>Deluxe A - 02</p></td>
                        <td>
                            <ButtonStyled status="pending">Pending</ButtonStyled>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Cahyadi Purnomo</p>
                            <p>#000123456</p>
                        </td>
                        <td><p>Oct 30th 2020 09:21 AM</p></td>
                        <td>
                            <p>Nov 2th, 2020</p>
                            <p>9.46 PM</p>
                        </td>
                        <td>
                            <p>Nov 4th, 2020</p>
                            <p>6.12 PM</p>
                        </td>
                        <td>
                            <ButtonStyled request="true">View Notes</ButtonStyled>
                        </td>
                        <td><p>Deluxe A - 02</p></td>
                        <td>
                            <ButtonStyled status="canceled">Canceled</ButtonStyled>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Cahyadi Purnomo</p>
                            <p>#000123456</p>
                        </td>
                        <td><p>Oct 30th 2020 09:21 AM</p></td>
                        <td>
                            <p>Nov 2th, 2020</p>
                            <p>9.46 PM</p>
                        </td>
                        <td>
                            <p>Nov 4th, 2020</p>
                            <p>6.12 PM</p>
                        </td>
                        <td>
                            <ButtonStyled request="true">View Notes</ButtonStyled>
                        </td>
                        <td><p>Deluxe A - 02</p></td>
                        <td>
                            <ButtonStyled status="booked-guest">Booked</ButtonStyled>
                        </td>
                    </tr>
                    
                </TBodyStyled>
            </TableStyled>
        
        </>

    )
}