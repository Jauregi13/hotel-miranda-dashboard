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
import { getEmployeesData, getEmployeesError, getEmployeesStatus } from "../../features/employees/employeesSlice"
import { useEffect, useState } from "react"
import { getEmployeesThunk } from "../../features/employees/employeesThunk"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { EmployeeInterface } from "../../interfaces/Employee/EmployeeInterface"
import { Status, StatusSlice } from "../../interfaces/types"

export const UsersPage = () => {

    const dispatch = useAppDispatch();
    const employees = useAppSelector<EmployeeInterface[]>(getEmployeesData);
    const employeesStatus = useAppSelector<StatusSlice>(getEmployeesStatus);
    const employeesError = useAppSelector(getEmployeesError);
    const [loading,setLoading] = useState<boolean>(false);
    const [employeesList,setEmployeesList] = useState<EmployeeInterface[]>([]);
    const [orderValue,setOrderValue] = useState<string>('start_date')
    const [tabActive, setTabActive] = useState<string>('all')
    const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric'}


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

    const handleFilter = (type: string) => {

        let employeesFilter: EmployeeInterface[] = [];

        if(type === 'all'){
            setTabActive('all')
            employeesFilter = employees;
        }
        else if(type === 'active'){
            setTabActive('active')
            employeesFilter = employees.filter((room) => room.active);
        }
        else if(type === 'inactive'){
            setTabActive('inactive')
            employeesFilter = employees.filter((room) => !room.active);
        }

        
        setEmployeesList(employeesFilter);
        handleOrderEmployee('start_date',employeesFilter)
        
        
    }

    const handleChangeOrderEmployee = (event: React.ChangeEvent<HTMLSelectElement>) => {

        handleOrderEmployee(event.target.value,employeesList)

    }

    const handleOrderEmployee = (orderValue: string, employeesList: EmployeeInterface[]) => {

        const orderList = [...employeesList]
        setOrderValue(orderValue)

        if(orderValue === 'start_date'){

            orderList.sort((a,b) => {

                if(b.start_date > a.start_date){
                    return 1
                }
                else if(b.start_date < a.start_date){
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
                        <li onClick={() => handleFilter('all')} className={tabActive === 'all' ? 'active' : undefined}>All Employee</li>
                        <li onClick={() => handleFilter('active')} className={tabActive === 'active' ? 'active' : undefined}>Active Employee</li>
                        <li onClick={() => handleFilter('inactive')} className={tabActive === 'inactive' ? 'active' : undefined}>Inactive Employee</li>
                    </TabsStyled>

                    <OptionsStyled>
                        <ButtonStyled status="create">+ New Employee</ButtonStyled>
                        <SelectStyled value={orderValue} onChange={handleChangeOrderEmployee}>
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

                                    <tr key={employee.userId}>
                                        <td>
                                            <ImageWithName src={employee.userImage}
                                                type="user" 
                                                name={employee.name} 
                                                id={employee.userId} 
                                                email={employee.email} 
                                                start_date={new Date(employee.start_date).toLocaleString('en-UK',dateOptions)} 
                                            />
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
                                                employee.active ? <ButtonStyled status="active">ACTIVE</ButtonStyled> 
                                                
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