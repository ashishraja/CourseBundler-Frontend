import { Text, Box, Button, Container, Heading, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { buySubscription } from '../../redux/actions/userAction'
import { clearError } from '../../redux/reducers/courseReducer'
import { clearSubscriptionError } from '../../redux/reducers/userReducer'
import { server } from '../../redux/store'
import "./Subscribe.css"

const Subscribe = ({user}) => {

  const dispatch = useDispatch();
  const [key,setKey] = useState('');

  const {subscriptionId , loading , error} = useSelector(state=>state.subscription);
  const {error:courseError} = useSelector(state=>state.course);

  const subscribeHandler = async() => {
    const {data} = await axios.get(`${server}/razorpaykey`);
    setKey(data.key);
    await dispatch(buySubscription());
  }

  useEffect(()=>{
    if(error){
      toast.error(error.toString());
      dispatch(clearSubscriptionError());
    }

    if(courseError){
      toast.error(courseError.toString());
      dispatch(clearError());
    }

    if(subscriptionId){
      const openPopUp = () => {
        const options = {
          key,
          name:"CourseBundler",
          description:"Get Access to all Premium Contents",
          subscription_id:subscriptionId.subscriptionId,
          callback_url:`${server}/paymentverification`,
          prefill:{
            name:user.name,
            email:user.email,
            contact:'9408284318',
          },
          notes:{
            address:'CourseBundler Programming',
          },
          theme:{
            color:'#FFC800',
          }
        };
        const razor = new window.Razorpay(options);
        razor.open();
      }
      openPopUp();
    }
  },[dispatch,error,user.name,user.email,subscriptionId,key,courseError]);

  return (
    <Container className='subscribe'>
      <Heading children="Welcome" className='subscribe-heading' />
      <VStack className='subscribe-stack'>
        <Box
         w="full"
         bg="yellow.400"
        >
          <Text className='subscribe-text' children={`Pro Pack - $299.00`} />
        </Box>

        <Box>
          <VStack className="stack" >
            <Text className="subscribe-text2" children={`Join Pro Pack and get access to all content`} />
            <Heading className='subscribe-heading1' children={"$299 Only"} />
          </VStack>
            <Button  className='button' colorScheme={"yellow"} onClick={subscribeHandler} isLoading={loading}>
              <span>Buy Now</span>
            </Button>
        </Box>

        <Box className="box" bg="blackAlpha.500">
          <Heading  className='subscribe-heading' children={`100% refund at cancellation`} />
          <Text className='subscribe-text1' children={`Terms and conditions applied`} />
        </Box>
      </VStack>
    </Container>
  )
}

export default Subscribe