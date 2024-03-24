import React from 'react';
import { useParams } from 'react-router-dom';
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
import './room.css'
import { useDispatch, useSelector } from 'react-redux';

const Room = () => {
    const { roomId } = useParams();
const {user} = useSelector(state=>state.user);
//  const name =user.name
    const myRoom = async(element)=>{

        const appId =1898919830 ;
        const serverSecret = "2a169d83b21a7d95d269c9ae501d52e9";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId,Date.now().toString(),`${user.name}` ,3600);

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.LiveStreaming
            }
        })
    }

    return (
        <div className='room-page'>
            {/* <h1>{roomId}</h1> */}
            <div ref={myRoom}/>
        </div>
    );
}

export default Room;