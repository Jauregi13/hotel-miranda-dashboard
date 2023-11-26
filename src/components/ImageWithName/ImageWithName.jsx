import { ImageWithNameStyled } from "./ImageWithNameStyled"


export const ImageWithName = (props) => {


    return (

        <>
        <ImageWithNameStyled type={props.type}>
            <img src={props.src} alt="Person name" />
            <div className="person-info">
                <p>{props.name}</p>
                <p>{props.id}</p>
                {
                    props.type === 'user' && 
                    
                    <p>{props.email}</p>  
                }
                
            </div>

        </ImageWithNameStyled>
        
        
        </>
    )
}