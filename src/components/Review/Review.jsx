import { ReviewStyled } from "./ReviewStyled"
import owner from './../../assets/founder.png'
import { CancelIcon, CheckIcon } from "../IconsStyled"



export const Review = () => {


    return (

        <>
            <ReviewStyled>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="review-owner">
                    <img src={owner} alt="Owner Image" width={56} height={56} />
                    <div className="review-owner__name">
                        <p>Kusnaidi Anderson</p>
                        <p>4m ago</p>
                    </div>
                    <div className="review-owner__icons">
                        <CheckIcon />
                        <CancelIcon />
                    </div>

                    
                </div>
            </ReviewStyled>
        
        </>

    )

}