
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./paymentfail.css"
import {  useColorMode } from '@chakra-ui/react';
import { Button, Text , Heading } from '@chakra-ui/react'
import Aos from "aos";
import "aos/dist/aos.css"
import { AiFillExclamationCircle } from 'react-icons/ai';

const PaymentFail = () => {
    
    const { colorMode } = useColorMode();
    const container2 = colorMode === 'dark' ? 'container2-dark' : 'container2-light';

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

  return (
      <section data-aos="fade-up" className="fail" >
     <div  className="container">
        <div className="container1">
            <div className={container2}>
                <div data-aos="fade-down" className="content">
                    <div>
                        <AiFillExclamationCircle  className="icon"/>
                    </div>
                    <Heading className='heading'>Payment Failed</Heading>
                    <Text className="fail-text" children="Hey, seems like there was some trouble.
                    We are there with you." />
                    <Link className='anchorTag' to="/">
                      <Button mt={"1"} className='fail-btn' colorScheme={"yellow"}>
                        <span>Try Again</span> 
                      </Button>
                    </Link>
                </div>
            </div>
        </div>
     </div>
   </section>
 );
}
export default PaymentFail