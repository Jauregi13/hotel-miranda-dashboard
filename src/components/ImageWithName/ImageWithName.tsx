import { ImageWithNameStyled } from "./ImageWithNameStyled"


interface ImageWithNameProps {
    name : string
    id: string
    src: string
    type: string
    email?: string
    start_date?: string
}

export const ImageWithName = (props: ImageWithNameProps) => {


    return (

        <>
        <ImageWithNameStyled type={props.type}>
            <img src={props.src} alt="Person name" />
            <div className="person-info">
                <p>{props.name}</p>
                <p>{props.id}</p>
                {
                    props.type === 'user' && 
                    
                    <>
                    <p>{props.email}</p> 
                    <p>Joined on {props.start_date}</p> 
                    </>
                    
                    
                }
                
            </div>

        </ImageWithNameStyled>
        
        
        </>
    )
}