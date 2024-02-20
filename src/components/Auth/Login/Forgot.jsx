import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./forgot.css"
import {  Box, useColorMode } from '@chakra-ui/react';
import { Button, Heading, Input } from '@chakra-ui/react'
import Aos from "aos";
import "aos/dist/aos.css"
import {BsExclamationTriangleFill} from "react-icons/bs"
import {FaLessThan} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { forgotPassword } from '../../../redux/actions/ProfileAction';
import { clearProfileError, clearProfileMessage } from '../../../redux/reducers/userReducer';
import { toastDisplay } from '../../Profile/UpdateProfile';


const Forgot = () => {
    const [email,setEmail] = useState("");
    const { colorMode } = useColorMode();
    const container2 = colorMode === 'dark' ? 'container2-dark' : 'container2-light';
    const {loading , message , error} = useSelector(state=>state.profile);
    const dispatch = useDispatch();
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email));
    }

    useEffect(() => {
        if(error){
           toast.error(error.toString() , toastDisplay);
           dispatch(clearProfileError());
        }
        if(message){
           toast.success(message.message , toastDisplay);
           dispatch(clearProfileMessage());
        }
   
       }, [dispatch , error, message]);
    
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

  return (
      <section data-aos="fade-up" className="forgot" >
     <div  className="container">
        <div className="container1">
            <div className={container2}>
                <div data-aos="fade-down" className="content">
                    <div>
                        <BsExclamationTriangleFill className='icon'/>
                    </div>
                <Heading className='heading'>Forgot Password</Heading><br />
                <form onSubmit={submitHandler}>      
                    <Input
                     required
                     id="email"
                     className={"forgot-input"}
                     value={email}
                     onChange={e=>setEmail(e.target.value)}
                     placeholder="ash@gmail.com"
                     type={"email"}
                     focusBorderColor='yellow.500'
                    />
                    <br />
                    <br />
                    <Button type="submit" isLoading={loading} className='forgot-btn' colorScheme={"yellow"}>
                        <span>Request a Link</span>
                    </Button>

                    <Box className="forgot-box" mt="4">
                       <Link to="/login">
                           <Button variant="link">
                            <FaLessThan className="forgot-box-icon"/>
                               Back to  Login
                          </Button> 
                       </Link>
                   </Box>
                </form>
                </div>
            </div>
        </div>
     </div>
   </section>
 );
}
export default Forgot