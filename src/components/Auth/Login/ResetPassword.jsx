import React, { useState , useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./resetpassword.css"
import {  useColorMode } from '@chakra-ui/react';
import { Button, Heading, Input } from '@chakra-ui/react'
import Aos from "aos";
import "aos/dist/aos.css"
import {SiGnuprivacyguard} from "react-icons/si"
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { resetPassword } from '../../../redux/actions/ProfileAction';
import { clearProfileError, clearProfileMessage } from '../../../redux/reducers/userReducer';
import { toastDisplay } from '../../Profile/UpdateProfile';



const ResetPassword = () => {
    const [password,setPassword] = useState();
    const { colorMode } = useColorMode();
    const container2 = colorMode === 'dark' ? 'container2-dark' : 'container2-light';
    const {loading , message , error} = useSelector(state=>state.profile);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {token} = useParams();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(resetPassword(token,password));
    }


    useEffect(() => {
        if(error){
           toast.error(error.toString() , toastDisplay);
           dispatch(clearProfileError());
        }
        if(message){
           toast.success(message.message , toastDisplay);
           dispatch(clearProfileMessage());
           navigate("/login");
        }
   
       }, [dispatch , error,navigate, message]);
    
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

  return (
      <section data-aos="fade-up" className="reset">
     <div  className="container">
        <div className="container1">
            <div className={container2}>
                <div data-aos="fade-down" className="content">
                   <div>
                        <SiGnuprivacyguard className="icon" />
                   </div>
                <Heading className='heading'>Reset Password</Heading><br />
                <form onSubmit={submitHandler}>      
                    <Input 
                     required
                     className="reset-input"
                     value={password}
                     onChange={e=>setPassword(e.target.value)}
                     placeholder="New Password"
                     type={"password"}
                     focusBorderColor='yellow.500'
                    /><br />
                    <br />
                    <Button isLoading={loading} type="submit" className='reset-btn' colorScheme={"yellow"}>
                        <span>Reset Password</span>
                    </Button>
                </form>
                </div>
            </div>
        </div>
     </div>
   </section>
  )
}

export default ResetPassword