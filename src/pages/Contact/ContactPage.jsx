import { Review } from "../../components/Review/Review"
import { ContactStyled } from "./ContactStyled"




export const ContactPage = () =>  {


    return (

        <>
        <ContactStyled>
            <div className="reviews-content">
                <Review />
                <Review />
                <Review />
            </div>
        </ContactStyled>
        
        
        
        
        </>

    )

}