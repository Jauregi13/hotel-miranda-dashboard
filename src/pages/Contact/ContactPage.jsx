import { Review } from "../../components/Review/Review"
import { ContactStyled } from "./ContactStyled"
import { TableStyled } from '../../components/Table/TableStyled'
import { TheadStyled } from '../../components/Table/TheadStyled'
import { TBodyStyled } from "../../components/Table/TbodyStyled"
import { ButtonStyled } from "../../components/ButtonStyled"



export const ContactPage = () =>  {


    return (

        <>
        <ContactStyled>
            <section className="reviews-content">
                <Review />
                <Review />
                <Review />
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
                        <tr>
                            <td>
                                <p>#000123456</p>
                                <p>Nov 21th 2020 09:21 AM</p>
                            </td>
                            <td>
                                <p>James Sitepu</p>
                                <p>jauregi.developer@gmail.com</p>
                                <p>012 334 55512</p>
                            </td>
                            <td className="contact-comment">
                                <p>We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</p>
                            </td>
                            <td>
                               <ButtonStyled status="archive">Archive</ButtonStyled> 
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <p>#000123456</p>
                                <p>Nov 21th 2020 09:21 AM</p>
                            </td>
                            <td>
                                <p>James Sitepu</p>
                                <p>jauregi.developer@gmail.com</p>
                                <p>012 334 55512</p>
                            </td>
                            <td className="contact-comment">
                                <p>We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</p>
                            </td>
                            <td>
                               <ButtonStyled status="archive">Archive</ButtonStyled> 
                            </td>

                        </tr>
                    </TBodyStyled>
                
                </TableStyled>
            </section>

            
                
        </ContactStyled>
        
        
        
        
        </>

    )

}