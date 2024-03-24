import React,{ useState } from "react";
import {useNavigate} from "react-router-dom";
import "./callpage.css";

const LiveVideo = () => {
    const [roomCode, setRoomCode] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(roomCode);
        navigate(`/room/${roomCode}`);
    }
    return(
        <div className="call-page">
            <form onSubmit={handleSubmit} className="call-from">
                <div>
                    <label htmlFor="">Enter Room Code</label>
                    <input type="text" value={roomCode}  onChange={(e)=>{setRoomCode(e.target.value)}} required placeholder="Enter Room Code"/>

                </div>
                <button type="submit">Enter Room</button>
            </form>
        </div>
    )
}

export default LiveVideo;