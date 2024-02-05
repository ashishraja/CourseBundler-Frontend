import { Box, Container, VStack, Text, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link, useSearchParams } from 'react-router-dom'
import "./paymentSuccess.css"

const PaymentSuccess = () => {

    const reference = useSearchParams()[0].get('reference');

    return (
        <Container className="success">
            <Heading className='success-heading'>
                You have Pro Pack
            </Heading>

            <VStack className='success-stack'>
                <Box
                    w="full"
                    bg="yellow.400"
                >
                    <Text className='success-title'> Payment Success </Text>
                </Box>

                <Box >
                    <VStack>
                        <Text className="success-text">
                            Congratulations you're a Pro Member. You have access
                            to premium content.
                        </Text>
                        <Heading>
                            <RiCheckboxCircleFill className="icon" />
                        </Heading>
                    </VStack>
                </Box>

                <Link className="success-link" to="/profile" >
                    <Button >Go to profile</Button>
                </Link>
                <Heading fontSize={['4vw','4vw','','1.3vw']} mb={["3",'5']}>
                    Reference : {reference}
                </Heading>

            </VStack>
        </Container>
    )
}

export default PaymentSuccess