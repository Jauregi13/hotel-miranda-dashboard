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
import { useRef } from "react"

export const UsersPage = () => {

    const dispatch = useDispatch();
    const employees = useSelector(getEmployeesData);
    const employeesStatus = useSelector(getEmployeesStatus);
    const employeesError = useSelector(getEmployeesError);
    const [loading,setLoading] = useState(false);
    const [employeesList,setEmployeesList] = useState([]);
    const [orderValue,setOrderValue] = useState('start_date')
    const selectRef = useRef()


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
                handleOrderEmployee(orderValue,employees)
                setLoading(false);

            default:
                break;
        }

    },[dispatch,employeesStatus,employees])

    const handleFilter = (type) => {

        let employeesFilter;

        if(type === 'all'){
            employeesFilter = employees;
        }
        else if(type === 'active'){
            employeesFilter = employees.filter((room) => room.status === 'ACTIVE');
        }
        else if(type === 'inactive'){
            employeesFilter = employees.filter((room) => room.status === 'INACTIVE');
        }

        setEmployeesList(employeesFilter);
        handleOrderEmployee('start_date',employeesFilter)
        
        
    }

    const handleChangeOrderEmployee = (event) => {

        handleOrderEmployee(event.target.value,employeesList)

    }

    const handleOrderEmployee = (orderValue, employeesList) => {

        const orderList = [...employeesList]
        setOrderValue(orderValue)

        if(orderValue === 'start_date'){

            orderList.sort((a,b) => {

                let date1 = new Date(a.start_date)
                let date2 = new Date(b.start_date)

                if(date2 > date1){
                    return 1
                }
                else if(date2 < date1){
                    return -1
                }

                return 0

            })
        }
        else if(orderValue === 'name'){

            orderList.sort((a,b) => {

                if(a.name > b.name){
                    return 1
                }

                else if(a.name < b.name){
                    return -1
                }

                return 0
            })
        }

        setEmployeesList(orderList);

    }

    

    return (

        <UsersPageStyled>

            <section className="tabs-users">

                <TabsWithOptionsStyled>
                    <TabsStyled>     
                        <li onClick={() => handleFilter('all')}>All Employee</li>
                        <li onClick={() => handleFilter('active')}>Active Employee</li>
                        <li onClick={() => handleFilter('inactive')}>Inactive Employee</li>
                    </TabsStyled>

                    <OptionsStyled>
                        <ButtonStyled status="create">+ New Employee</ButtonStyled>
                        <SelectStyled value={orderValue} onChange={handleChangeOrderEmployee} ref={selectRef}>
                            <option value='start_date'>Start Date</option>
                            <option value="name">First Name</option>
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
                                            <ImageWithName src="/src/assets/founder.png" type="user" name={employee.name} id={employee.id} email={employee.email} start_date={employee.start_date} />
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