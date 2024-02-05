import { Avatar, Box, Container, Text, Heading, Stack, VStack, Button, HStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import video from "./../../assets/videos/video.mp4"
import img from "./../../assets/images/1.png"
import { RiArrowDownLine, RiArrowUpLine, RiSecurePaymentFill } from 'react-icons/ri'
import termsAndConditions from "../../assets/docs/termsAndConditions.js";
import { useDispatch, useSelector } from 'react-redux'
import { getStats } from '../../redux/actions/userAction'

const Founder = () => (
    <Stack direction={["column", "row"]} spacing={["4", '16']} p={'8'}>
        <VStack>
            <Avatar src={img} boxSize={['48', '64']} />
            <Text mt='2' textAlign={'center'} children="Co-Founder" opacity={0.7} />
        </VStack>

        <div justifycontent={'center'} alignitems={['center', 'flex-start']}>
            <Heading pt={['2', '16']} textAlign={['center', 'left']} children="Ashish Santani" size={['md', 'xl']} />
            <Text mt={['2', '']} textAlign={['center', 'left']} children={`Hi, Im a Full-Stack MERN Developer. I create responsive and secured websites for my clients. 
            Im a versatile and skilled professional who is proficient in both front-end and back-end web development.`}
                opacity={0.7} />
        </div>
    </Stack>
);

const Databox = ({ title, qtyPercentage, qty, profit }) => (
    <Box
        w={['full', '20%']}
        boxShadow={'-2px 0 5px grey'}
        p="8"
        my='8'
        borderRadius={'lg'}
    >
        <Text children={title} />

        <HStack spacing={'6'}>
            <Text fontSize={'2xl'} fontWeight="bold" children={qty} />
            <HStack>
                <Text children={`${qtyPercentage}%`} />
                {profit ? (
                    <RiArrowUpLine color="green" />
                ) : (
                    <RiArrowDownLine color="red" />
                )}
            </HStack>

        </HStack>
        <Text children={'Since Last Month'} opacity={'.6'} />
    </Box>
)

const VideoPlayer = () => (
    <Box>
        <video
            autoPlay
            muted
            loop
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            src={video}
        ></video>
    </Box>
);

const TandC = () => (
    <Box>
        <Heading
            size={'md'}
            children={'Terms & Conditions'}
            textAlign={['center', 'left']}
            my={'8'}
        />

        <Box h={'sm'} p={'4'} overflowY={'scroll'}>
            <Text
                fontFamily={'heading'}
                letterSpacing={'widset'}
                textAlign={['center', 'left']}
            >
                {termsAndConditions}
            </Text>
            <Heading
                my={'4'}
                size={'xs'}
                children='Refund only applicable for cancellation within 7 days.'
            />
        </Box>
    </Box>
);

const About = () => {

    const dispatch = useDispatch();
    const {
        message
    } = useSelector(state => state.profile);
    console.log(message);
    useEffect(() => {
        dispatch(getStats());
    }, [dispatch]);

    return (
        <Container maxW={'container.lg'} padding='16' mt="28" mb='4' boxShadow={"0 0 5px grey"}>
            <Heading children="About Us" mb={['0', '4']} textAlign={['center', 'left']} />
            <Founder />

            <Heading
                children={'Our Statistics'}
                textAlign={['center', 'left']}
                my='8'
            />
            <Stack
                direction={['column', 'row']}
                minH='24'
                justifyContent={'space-evenly'}>
                <Databox
                    title="Views"
                    qty={message && message.viewsCount}
                    qtyPercentage={message && message.viewsPercentage}
                    profit={message && message.viewsProfit} />
                <Databox
                    title="Users"
                    qty={message && message.usersCount}
                    qtyPercentage={message && message.usersPercentage}
                    profit={message && message.usersProfit} />
                <Databox
                    title="Subscription"
                    qty={message && message.subscriptionCount}
                    qtyPercentage={message && message.subscriptionPercentage}
                    profit={message && message.subscriptionProfit} />
            </Stack>

            <Stack mx='8' mb='8' direction={["column", "row"]} alignitems="center">
                <Text fontFamily={"cursive"} m='2' textAlign={['center', 'left']}>
                    We are the ones who provide the premium quality of courses only for premium users.
                </Text>

                <Link to="/subscribe">
                    <Button ml={["6",'']} variant={'ghost'} colorScheme="yellow">
                        Checkout Our Plan
                    </Button>
                </Link>
            </Stack>


            <VideoPlayer />

            <TandC termsAndConditions={termsAndConditions} />

            <HStack my='4' p={'4'} >
                <RiSecurePaymentFill />
                <Heading
                    fontSize={['3vw', '1vw']}
                    fontFamily="sans-serif"
                    textTransform={'uppercase'}
                    children={'Payment is secured by Razorpay'}
                />
            </HStack>

        </Container>
    )
}

export default About