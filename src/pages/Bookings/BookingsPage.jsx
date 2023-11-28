import { ButtonStyled } from "../../components/ButtonStyled"
import { SelectStyled } from "../../components/SelectStyled"
import { TableStyled } from "../../components/Table/TableStyled"
import { TBodyStyled } from "../../components/Table/TbodyStyled"
import { TheadStyled } from "../../components/Table/TheadStyled"
import { OptionsStyled } from "../../components/TabsWithOptions/OptionsStyled"
import { TabsStyled } from "../../components/TabsWithOptions/TabsStyled"
import { TabsWithOptionsStyled } from "../../components/TabsWithOptions/TabsWithOptionsStyled"
import { BookingsPageStyled } from "./BookingsPageStyled"




export const BookingsPage = () => {


    return (

        <>
        <BookingsPageStyled>

            <TabsWithOptionsStyled>
                <TabsStyled>
                    <li>All Bookings</li>
                    <li>Check In</li>
                    <li>Check Out</li>
                    <li>In Progress</li>
                </TabsStyled>
                <OptionsStyled>
                    <SelectStyled>
                        <option value='newest'>Newest</option>
                    </SelectStyled>
                </OptionsStyled>
            </TabsWithOptionsStyled>

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
        </BookingsPageStyled>
            
        
        </>

    )
}