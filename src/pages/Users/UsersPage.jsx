import { ButtonStyled } from "../../components/ButtonStyled"
import { PhoneIcon } from "../../components/IconsStyled"
import { ImageWithName } from "../../components/ImageWithName/ImageWithName"
import { TableStyled } from "../../components/Table/TableStyled"
import { TBodyStyled } from "../../components/Table/TbodyStyled"
import { TheadStyled } from "../../components/Table/TheadStyled"
import { UsersPageStyled } from "./UsersPageStyled"
import { TabsWithOptionsStyled } from "../../components/TabsWithOptions/TabsWithOptionsStyled"
import { TabsStyled } from "../../components/TabsWithOptions/TabsStyled"
import { OptionsStyled } from "../../components/TabsWithOptions/OptionsStyled"
import { SelectStyled } from "../../components/SelectStyled"

export const UsersPage = () => {

    return (

        <UsersPageStyled>

            <section className="tabs-users">

                <TabsWithOptionsStyled>
                    <TabsStyled>     
                        <li>All Employee</li>
                        <li>Active Employee</li>
                        <li>Inactive Employee</li>
                    </TabsStyled>

                    <OptionsStyled>
                        <ButtonStyled status="create">+ New Employee</ButtonStyled>
                        <SelectStyled>
                            <option value='Newest'>Newest</option>
                        </SelectStyled>
                    </OptionsStyled>
                </TabsWithOptionsStyled>
                
            </section>

            <section className="tabla-users">

                <TableStyled>
                    <TheadStyled>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Contact</th>
                            <th>Status</th>
                        </tr>
                    </TheadStyled>
                    <TBodyStyled>
                        <tr>
                            <td>
                                <ImageWithName src="/src/assets/founder.png" type="user" name="James Sitepu" id="#12341225" email="james@gmail.com"></ImageWithName>
                            </td>
                            <td>
                                <p>Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
                            </td>
                            <td>
                                <div className="tabla-users__contact-info">
                                <PhoneIcon className="tabla-users__contact-info__phone-icon"/> 
                                <p className="tabla-users__contact-info__phone-number">012 334 55512</p>
                                </div>
                            </td>
                            <td>
                                <ButtonStyled status="active">ACTIVE</ButtonStyled>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ImageWithName src="/src/assets/founder.png" type="user" name="James Sitepu" id="#12341225" email="james@gmail.com"></ImageWithName>
                            </td>
                            <td>
                                <p>Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
                            </td>
                            <td>
                                <div className="tabla-users__contact-info">
                                <PhoneIcon className="tabla-users__contact-info__phone-icon"/> 
                                <p className="tabla-users__contact-info__phone-number">012 334 55512</p>
                                </div>
                            </td>
                            <td>
                                <ButtonStyled status="inactive">INACTIVE</ButtonStyled>
                            </td>
                        </tr>
                    </TBodyStyled>
                </TableStyled>

            </section>


        </UsersPageStyled>
        
        
        

    )
}