import React, { useEffect, useState , useRef} from 'react'
import './ForumRoom.css'
import { Link, useParams } from 'react-router-dom'
// // import { Avatar } from '@mui/material'
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { ArrowLeft, EmojiEmotionsOutlined } from '@mui/icons-material';
import { collection, onSnapshot ,addDoc, orderBy, query, serverTimestamp} from "firebase/firestore";
import db from '../../db.js';
import Chat from './Chat';
import { useDispatch, useSelector } from 'react-redux';


const ForumRoom = () => {
const bodys = useRef()

const [messages, setmessages] = useState([])
const [input, setinput] = useState("")
const dispatch = useDispatch();
const {user} = useSelector(state=>state.user);
// console.log(user);


const createchat = (e)=>{
  e.preventDefault()
  if(input){
    addDoc(collection(db,"chats"), {
      name: user.name,
      userId : user.avatar.public_id,
      message:input,
      timestamp: serverTimestamp(),
    });
setinput('')
  }
else{
  return null
}

}
useEffect(() => {
  const targetpostion = bodys.current?.scrollHeight
  bodys.current?.scrollTo({top: targetpostion , behavior: 'smooth'}) 
  
}, [messages])

useEffect(() => {


 
    onSnapshot(query(collection(db, 'chats'),orderBy('timestamp','asc')), (querySnapshot) => {
      setmessages(querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
      })))
  });
}, [user])
  return (
    <div className='ForumRoom' >
      <div className="chat-head">
        <div className="chat-head-left">
          <div className="chat-head-left-info">
         <h3>Community Forum</h3>
          </div>
        </div>
       
      </div>

      <div className="chat-body"  ref={bodys} >
        {messages.map((chat)=> <Chat userId = {chat.data.userId} message={chat.data.message} timestamp = {chat.data.timestamp}key = {chat.id}name={chat.data.name}/>)}
      </div>

      <div className="chat-footer">
        

        <form  onSubmit={createchat}>
      <input type="text" value={input} placeholder='Type a message' onChange={(e)=> setinput(e.target.value)} />
          <button  onClick={createchat} className='send-button'>Send Message</button>
          <button  onClick={createchat} className='send-button-mob'>Send</button>
        </form>
      </div>
      </div>
  )

 }

export default ForumRoom