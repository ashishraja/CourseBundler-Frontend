import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useColorMode } from '@chakra-ui/react';

const Chat = ({name,message,timestamp,userId}) => {
    const { colorMode } = useColorMode();
    const textname = colorMode === 'dark' ? "dark" : "";
const {user} = useSelector(state=>state.user);

 return (
    <p  className={`chatMessage ${userId === user.avatar.public_id && `chat-receiver`}`}> <span className={`sender-name ${textname}`}>{name}</span>
   {message}
     <span className="chat-time">{new Date(timestamp?.toDate()).toUTCString()}</span>
   </p>
   )
 }

export default Chat

// import React from 'react'

// const Chat = () => {
//   return (
//     <div>Chat</div>
//   )
// }

// export default Chat