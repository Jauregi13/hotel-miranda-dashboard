import { RoomNameStyled } from "./RoomNameStyled"
import room from './../../assets/hotel-room.jpg'



export const RoomName = () => {


    return (

        <>
        <RoomNameStyled className="room-name">
            <img src={room} alt="Room Hotel" width={150} height={77}/>
            <div className="room-name__text">
                <p className="room-name__text__id">#000123456</p>
                <p className="room-name__text__name">Deluxe A-91234</p>
            </div>
        </RoomNameStyled>
        
        
        </>
    )
}