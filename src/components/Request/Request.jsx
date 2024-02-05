import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./request.css"
import { FormLabel, Textarea } from '@chakra-ui/react';
import { Box, Button, Heading, Input } from '@chakra-ui/react'
import Aos from "aos";
import "aos/dist/aos.css"



const Request = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])


  return (
   <section data-aos="fade-up" className="request">
     <div  className="container">
            <div data-aos="fade-down" className="content">
                <Heading className='heading'>Request New Course</Heading><br />
                <form action="https://formsubmit.co/3d5a3a2b25cc283f9065564c11177985" method="POST">    
                    <FormLabel className="label" htmlFor='name'>Enter your Full Name</FormLabel>  
                    <Input
                     required
                     id="name"
                     className={"request-input"}
                     name="name"
                     placeholder="Full Name"
                     type={"text"}
                     focusBorderColor='yellow.500'
                    />
                    <FormLabel className="label" htmlFor='name'>Enter your Email Address</FormLabel> 
                    <Input
                     required
                     id="email"
                     className={"request-input"}
                     name="email"
                     placeholder="ash@gmail.com"
                     type={"email"}
                     focusBorderColor='yellow.500'
                    />
                    <FormLabel className="label" htmlFor='name'> Course </FormLabel> 
                    <Textarea 
                     required
                     className="request-input"
                     id="course"
                     name="course"
                     placeholder="Enter your CourseRequest"
                     rows={"5"}
                     type={"text"}
                     focusBorderColor='yellow.500'
                    />
                    <br />
                    <br />
                    <Button className='request-btn' colorScheme={"yellow"} type="submit">
                        <span>Send Mail</span>
                    </Button>
                    <Box className="request-box" mt="4">
                       See available courses?{" "}
                       <Link to="/courses">
                           <Button colorScheme={"yellow"} variant="link">
                               Click Here
                          </Button> 
                       </Link>
                   </Box>
                </form>
            </div>
     </div>
   </section>
  )
}

export default Request