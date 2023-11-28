import { RoomNameStyled } from "./RoomNameStyled"
import room from './../../assets/hotel-room.jpg'



export const RoomName = (props) => {


    return (

        <>
        <RoomNameStyled className="room-name">
            <img src={room} alt="Room Hotel" width={150} height={77}/>
            <div className="room-name__text">
                <p className="room-name__text__id">{props.id}</p>
                <p className="room-name__text__name">{props.number}</p>
            </div>
        </RoomNameStyled>
        
        
        </>
    )
}