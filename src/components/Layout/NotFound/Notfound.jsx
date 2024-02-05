import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./notfound.css"
import {  useColorMode } from '@chakra-ui/react';
import { Button, Text , Heading } from '@chakra-ui/react'
import Aos from "aos";
import "aos/dist/aos.css"
import { AiFillExclamationCircle } from 'react-icons/ai';

const Notfound = () => {
    
    const { colorMode } = useColorMode();
    const container2 = colorMode === 'dark' ? 'container2-dark' : 'container2-light';

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

  return (
      <section data-aos="fade-up" className="notfound" >
     <div  className="container">
        <div className="container1">
            <div className={container2}>
                <div data-aos="fade-down" className="content">
                    <div>
                        <AiFillExclamationCircle  className="icon"/>
                    </div>
                    <Heading className='heading'>Page Not Found</Heading>
                    <Text className="notfound-text" children="We are sorry, the page you're requesting is not found." />
                    <Link className="anchorTag" to="/">
                      <Button mt={"2"} className='notfound-btn' colorScheme={"yellow"}>
                        <span> Go to Home </span>  
                      </Button>
                    </Link>
                </div>
            </div>
        </div>
     </div>
   </section>
 );
}
export default Notfound