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
import { useDispatch, useSelector } from "react-redux"
import { getEmployeesData, getEmployeesError, getEmployeesStatus } from "../../features/employees/employeesSlice"
import { useEffect, useState } from "react"
import { getEmployeesThunk } from "../../features/employees/employeesThunk"

export const UsersPage = () => {

    const dispatch = useDispatch();
    const employees = useSelector(getEmployeesData);
    const employeesStatus = useSelector(getEmployeesStatus);
    const employeesError = useSelector(getEmployeesError);
    const [loading,setLoading] = useState(false);
    const [employeesList,setEmployeesList] = useState([]);

    useEffect(() => {

        switch (employeesStatus) {
            case 'idle':
                console.log('idle');
                dispatch(getEmployeesThunk());
                
                break;
            
            case 'pending':
                console.log('pending');
                setLoading(true);

                break;

            case 'rejected':

                setLoading(false);


            case 'fulfilled':

                setEmployeesList(employees);
                setLoading(false);

            default:
                break;
        }

    },[dispatch,employeesStatus,employees])

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
                {
                    loading ? <p>Loading...</p> :

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

                            {
                                employeesList.map((employee) => (

                                    <tr key={employee.id}>
                                        <td>
                                            <ImageWithName src="/src/assets/founder.png" type="user" name={employee.name} id={employee.id} email={employee.email}></ImageWithName>
                                        </td>
                                        <td>
                                            <p>{employee.description}</p>
                                        </td>
                                        <td>
                                            <div className="tabla-users__contact-info">
                                            <PhoneIcon className="tabla-users__contact-info__phone-icon"/> 
                                            <p className="tabla-users__contact-info__phone-number">{employee.contact}</p>
                                            </div>
                                        </td>
                                        <td>
                                            {
                                                employee.status == 'ACTIVE' ? <ButtonStyled status="active">ACTIVE</ButtonStyled> 
                                                
                                                : <ButtonStyled status="inactive">INACTIVE</ButtonStyled> 
                                            }
                                            
                                        </td>
                                    </tr>
                                ))
                            }
                            
                            
                        </TBodyStyled>
                    </TableStyled>

                }
                

            </section>


        </UsersPageStyled>
        
        
        

    )
}