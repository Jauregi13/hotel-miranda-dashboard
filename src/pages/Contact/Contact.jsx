import { Review } from "../../components/Review/Review"
import { ContactStyled } from "./ContactStyled"




export const Contact = () =>  {


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