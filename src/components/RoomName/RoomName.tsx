import { RoomNameStyled } from "./RoomNameStyled"

interface RoomNameProps {

    id: string,
    number: string,
    image: string

}


export const RoomName = (props : RoomNameProps) => {


    return (

        <>
        <RoomNameStyled className="room-name">
            <img src={props.image} alt="Room Hotel" width={150} height={77}/>
            <div className="room-name__text">
                <p className="room-name__text__id">{props.id}</p>
                <p className="room-name__text__name">{props.number}</p>
            </div>
        </RoomNameStyled>
        
        
        </>
    )
}