import { Review } from "../../components/Review/Review"
import { ContactStyled } from "./ContactStyled"
import { TableStyled } from '../../components/Table/TableStyled'
import { TheadStyled } from '../../components/Table/TheadStyled'
import { TBodyStyled } from "../../components/Table/TbodyStyled"
import { ButtonStyled } from "../../components/ButtonStyled"
import { TabsWithOptionsStyled } from "../../components/TabsWithOptions/TabsWithOptionsStyled"
import { TabsStyled } from "../../components/TabsWithOptions/TabsStyled"
import { OptionsStyled } from "../../components/TabsWithOptions/OptionsStyled"
import { SelectStyled } from "../../components/Inputs/SelectStyled"
import { useEffect, useMemo, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getContactsData, getContactsStatus } from "../../features/contacts/ContactSlice"
import { ContactInterface } from "../../interfaces/Contact/ContactInterface"
import { StatusSlice } from "../../interfaces/types"
import { getContactsThunk } from "../../features/contacts/ContactThunks"


export const ContactPage = () =>  {

    const dispatch = useAppDispatch()
    const contacts = useAppSelector<ContactInterface[]>(getContactsData)
    const contactsStatus = useAppSelector<StatusSlice>(getContactsStatus)
    const [contactsList,setContactList] = useState<ContactInterface[]>([])
    const [tabActive, setTabActive] = useState<string>('all')
    const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric'}
    const timeOptions : Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit", hour12: true}



    const handleOrderContacts = (contactList: ContactInterface[]) => {

        const orderContactList : ContactInterface[] = [...contactList]

        orderContactList.sort((a: ContactInterface,b: ContactInterface) => {
                        
            return new Date(a.date).getTime() - new Date(b.date).getTime()
            
        })

        setContactList(orderContactList)

    }

    const handleFilter = (type : string) => {

        let contactsFilter : ContactInterface[] = [] 

        if(type === 'archived'){
            contactsFilter = contactsList.filter((contact) => !contact.published)
        }
        else {
            contactsFilter = contacts
        }
        setTabActive(type)
        setContactList(contactsFilter)
        handleOrderContacts(contactsFilter)

    }

    useEffect(() => {

        if(contactsStatus == 'idle'){
            dispatch(getContactsThunk())
        }


    },[])

    useMemo(() => {

        setContactList(contacts)
        handleOrderContacts(contacts)
        console.log(contacts);
        
    },[contacts])


    

    


    return (

        <>
        <ContactStyled>
            <section className="reviews-content">
                <Review />
                <Review />
                <Review />
            </section>

            <section className="contact-tabs">

                <TabsWithOptionsStyled>
                    <TabsStyled>
                        <li onClick={() => handleFilter('all')} className={tabActive === 'all' ? 'active' : undefined }>All Customer Reviews</li>
                        <li onClick={() => handleFilter('archived')} className={tabActive === 'archived' ? 'active' : undefined }>Archived</li>
                    </TabsStyled>
                    <OptionsStyled>
                        <SelectStyled>
                            <option value='newest'>Newest</option>
                        </SelectStyled>
                    </OptionsStyled>
                </TabsWithOptionsStyled>

            </section>

            <section className="contact-table">
                <TableStyled>
                    <TheadStyled>
                        <tr>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Comment</th>
                            <th></th>
                        </tr>
                        
                    </TheadStyled>
                    <TBodyStyled>

                        {
                            contactsList.map((contact) => (

                                <tr>
                                    <td>
                                        <p>#{contact.reviewId}</p>
                                        <p>{new Date(contact.date).toLocaleString('en-UK',dateOptions) + ' ' + new Date(contact.date).toLocaleTimeString('en-UK',timeOptions)}</p>
                                    </td>
                                    <td>
                                        <p>{contact.customer}</p>
                                        <p>{contact.email}</p>
                                        <p>{contact.phone}</p>
                                    </td>
                                    <td className="contact-comment">
                                        <p>{contact.subject}</p>
                                        <p>{contact.comment}</p>
                                    </td>
                                    <td>
                                       {!contact.published && <ButtonStyled status="archive">Archive</ButtonStyled> } 
                                    </td>

                                </tr>



                            ))
                        }
                    </TBodyStyled>
                
                </TableStyled>
            </section>

            
                
        </ContactStyled>
        
        
        
        
        </>

    )

}