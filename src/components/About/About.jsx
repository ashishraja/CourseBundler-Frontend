// import { Avatar, Box, Container, Text, Heading, Stack, VStack, Button, HStack } from '@chakra-ui/react'
// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import video from "./../../assets/videos/video.mp4"
// import img from "./../../assets/images/p.png"
// import img1 from "./../../assets/images/Deep.png"
// import img2 from "./../../assets/images/mohit.png"
// import img3 from "./../../assets/images/disha.png"
// // /frontend/src/assets/images/p.png

// import { RiArrowDownLine, RiArrowUpLine, RiSecurePaymentFill } from 'react-icons/ri'
// import termsAndConditions from "../../assets/docs/termsAndConditions.js";
// import {Mission, Achivement} from "../../assets/docs/mission.js";
// import { useDispatch, useSelector } from 'react-redux'
// import { getStats } from '../../redux/actions/userAction'

// const Founder = () => (
//     <Stack direction={["column", "row"]} spacing={["4", '16']} p={'8'}>
//         <VStack>
//             <Avatar src={img} boxSize={['40', '60']} />
//             <Text mt='2' textAlign={'center'} children="Priya MG | Founder" opacity={0.7} />
//         </VStack>

//         {/* <VStack>
//             <Avatar src={img2} boxSize={['40', '60']} />
//             <Text mt='2' textAlign={'center'} children="Mohit Gadhiya | Co-Founder / CEO" opacity={0.7} />
//         </VStack>

//         <VStack>
//             <Avatar src={img1} boxSize={['40', '60']} />
//             <Text mt='2' textAlign={'center'} children="Deep Talaviya | General Manager" opacity={0.7} />
//         </VStack> */}

//         {/* <VStack>
//             <Avatar src={img3} boxSize={['48', '64']} />
//             <Text mt='2' textAlign={'center'} children="Chief Operating Officer" opacity={0.7} />
//         </VStack> */}

//         {/* <div justifycontent={'center'} alignitems={['center', 'flex-start']}>
//             <Heading pt={['2', '16']} textAlign={['center', 'left']} children="Ashish Santani" size={['md', 'xl']} />
//             <Text mt={['2', '']} textAlign={['center', 'left']} children={`Hi, Im a Full-Stack MERN Developer. I create responsive and secured websites for my clients. 
//             Im a versatile and skilled professional who is proficient in both front-end and back-end web development.`}
//                 opacity={0.7} />
//         </div> */}
//     </Stack>
// );

// const Databox = ({ title, qtyPercentage, qty, profit }) => (
//     <Box
//         w={['full', '20%']}
//         boxShadow={'-2px 0 5px grey'}
//         p="8"
//         my='8'
//         borderRadius={'lg'}
//     >
//         <Text children={title} />

//         <HStack spacing={'6'}>
//             <Text fontSize={'2xl'} fontWeight="bold" children={qty} />
//             <HStack>
//                 <Text children={`${qtyPercentage}%`} />
//                 {profit ? (
//                     <RiArrowUpLine color="green" />
//                 ) : (
//                     <RiArrowDownLine color="red" />
//                 )}
//             </HStack>

//         </HStack>
//         <Text children={'Since Last Month'} opacity={'.6'} />
//     </Box>
// )

// const VideoPlayer = () => (
//     <Box>
//         <video
//             autoPlay
//             muted
//             loop
//             controls
//             controlsList="nodownload nofullscreen noremoteplayback"
//             disablePictureInPicture
//             disableRemotePlayback
//             src={video}
//         ></video>
//     </Box>
// );

// const TandC = () => (
//     <Box>
//         <Heading
//             size={'xl'}
//             children={' 📌 Mission'}
//             textAlign={['center']}
//             my={'8'}
//         />
//         <Box h={'sm'} p={'2'} overflowY={'scroll'}>
//             <Text
//                 fontFamily={'heading'}
//                 letterSpacing={'widset'}
//                 textAlign={['center', 'left']}
//                 dangerouslySetInnerHTML={{ __html: Mission }}
//             >
//                 {/* {Mission} */}
//             </Text>
//         </Box>

//         <Heading
//             size={'xl'}
//             children={' 🏆 Achievements'}
//             textAlign={['center']}
//             my={'6'}
//         />
//         <Box h={'sm'} p={'2'} overflowY={'scroll'}>
//             <Text
//                 fontFamily={'heading'}
//                 letterSpacing={'widset'}
//                 textAlign={['center', 'left']}
//                 dangerouslySetInnerHTML={{ __html: Achivement }}
//             >
//                 {/* {Achivement} */}
//             </Text>
//         </Box>

//         <Heading
//             size={'md'}
//             children={'Terms & Conditions'}
//             textAlign={['center', 'left']}
//             my={'4'}
//         />

//         <Box h={'sm'} p={'4'} overflowY={'scroll'}>
//             <Text
//                 fontFamily={'heading'}
//                 letterSpacing={'widset'}
//                 textAlign={['center', 'left']}
//                 d
//             >
//                 {termsAndConditions}
//             </Text>
//             <Heading
//                 my={'4'}
//                 size={'xs'}
//                 children='Refund only applicable for cancellation within 7 days.'
//             />
//         </Box>


//     </Box>
// );

// const About = () => {

//     const dispatch = useDispatch();
//     const { message } = useSelector(state => state.profile);
    
//     useEffect(() => {
//         dispatch(getStats());
//     }, [dispatch]);

//     return (
//         <Container maxW={'container.lg'} padding='16' mt="28" mb='4' boxShadow={"0 0 5px grey"}>
//             <Heading children="Our Team" mb={['0', '4']} textAlign={['center', 'left']} />
//             <Founder />

//             <Heading
//                 children={'Our Statistics'}
//                 textAlign={['center', 'left']}
//                 my='8'
//             />
//             <Stack
//                 direction={['column', 'row']}
//                 minH='24'
//                 justifyContent={'space-evenly'}>
//                 <Databox
//                     title="Views"
//                     qty={message && message.viewsCount}
//                     qtyPercentage={message && message.viewsPercentage}
//                     profit={message && message.viewsProfit} />
//                 <Databox
//                     title="Users"
//                     qty={message && message.usersCount}
//                     qtyPercentage={message && message.usersPercentage}
//                     profit={message && message.usersProfit} />
//                 <Databox
//                     title="Subscription"
//                     qty={message && message.subscriptionCount}
//                     qtyPercentage={message && message.subscriptionPercentage}
//                     profit={message && message.subscriptionProfit} />
//             </Stack>

//             <Stack mx='8' mb='8' direction={["column", "row"]} alignitems="center">
//                 <Text fontFamily={"cursive"} m='2' textAlign={['center', 'left']}>
//                     We are the ones who provide the premium quality of courses only for premium users.
//                 </Text>

//                 <Link to="/subscribe">
//                     <Button ml={["6", '']} variant={'ghost'} colorScheme="yellow">
//                         Checkout Our Plan
//                     </Button>
//                 </Link>
//             </Stack>


//             <VideoPlayer />

//             <TandC termsAndConditions={termsAndConditions} />

//             <HStack my='4' p={'4'} >
//                 <RiSecurePaymentFill />
//                 <Heading
//                     fontSize={['3vw', '1vw']}
//                     fontFamily="sans-serif"
//                     textTransform={'uppercase'}
//                     children={'Payment is secured by Razorpay'}
//                 />
//             </HStack>

//         </Container>
//     )
// }

// export default About

import { Avatar, Box, Container, Text, Heading, Stack, VStack, Button, HStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import video from "./../../assets/videos/video.mp4"
import deep from "./../../assets/images/Deep.png"
import p from "./../../assets/images/p.png"
import disha from "./../../assets/images/disha.png"
import mohit from "./../../assets/images/mohit.png"
import { RiArrowDownLine, RiArrowUpLine, RiSecurePaymentFill } from 'react-icons/ri'
import termsAndConditions from "../../assets/docs/termsAndConditions.js";
import mission from "../../assets/docs/mission.js";
import achievement from "../../assets/docs/achievement.js";
import { useDispatch, useSelector } from 'react-redux'
import { getStats } from '../../redux/actions/userAction'

const Founder = () => (
   <Stack>
     <Stack direction={["column", "row"]} spacing={["4", '16']} p={'8'}>
        <VStack>
            <Avatar src={p} boxSize={['48', '64']} />
            <Text mt='2' textAlign={'center'} children="Founder" opacity={0.7} />
        </VStack>

        <div justifycontent={'center'} alignitems={['center', 'flex-start']}>
            <Heading pt={['2', '16']} textAlign={['center', 'left']} children="Priya MG" size={['md', 'xl']} />
            <Text mt={['2', '']} textAlign={['center', 'left']} children={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
                opacity={0.7} />
        </div>
    </Stack>
    <Stack direction={["column", "row-reverse"]} spacing={["4", '16']} p={'8'}>
        <VStack>
            <Avatar src={mohit} boxSize={['48', '64']} />
            <Text mt='2' textAlign={'center'} children="Co-Founder/CEO" opacity={0.7} />
        </VStack>

        <div justifycontent={'center'} alignitems={['center', 'flex-start']}>
            <Heading pt={['2', '16']} textAlign={['center', 'left']} children="Mohit Gadhiya" size={['md', 'xl']} />
            <Text mt={['2', '']} textAlign={['center', 'left']} children={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
                opacity={0.7} />
        </div>
    </Stack>
    <Stack direction={["column", "row"]} spacing={["4", '16']} p={'8'}>
        <VStack>
            <Avatar src={deep} boxSize={['48', '64']} />
            <Text mt='2' textAlign={'center'} children="General Manager" opacity={0.7} />
        </VStack>

        <div justifycontent={'center'} alignitems={['center', 'flex-start']}>
            <Heading pt={['2', '16']} textAlign={['center', 'left']} children="Deep Talaviya" size={['md', 'xl']} />
            <Text mt={['2', '']} textAlign={['center', 'left']} children={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
                opacity={0.7} />
        </div>
    </Stack>
    <Stack direction={["column", "row-reverse"]} spacing={["4", '16']} p={'8'}>
        <VStack>
            <Avatar src={disha} boxSize={['48', '64']} />
            <Text mt='2' textAlign={'center'} children="Chief Operating Officer" opacity={0.7} />
        </VStack>

        <div justifycontent={'center'} alignitems={['center', 'flex-start']}>
            <Heading pt={['2', '16']} textAlign={['center', 'left']} children="Disha Mangukiya" size={['md', 'xl']} />
            <Text mt={['2', '']} textAlign={['center', 'left']} children={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
                opacity={0.7} />
        </div>
    </Stack>
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
                dangerouslySetInnerHTML={{ __html: termsAndConditions }}
            >
                {/* {termsAndConditions} */}
            </Text>
            <Heading
                my={'4'}
                size={'xs'}
                children='Refund only applicable for cancellation within 7 days.'
            />
        </Box>
    </Box>
);

const Achievement = () => (
    <Box>
        <Heading
            size={'md'}
            children={'Achievements'}
            textAlign={['center', 'left']}
            my={'8'}
        />

        <Box h={'sm'} p={'4'} overflowY={'scroll'}>
            <Text
                fontFamily={'heading'}
                letterSpacing={'widset'}
                textAlign={['center', 'left']}
                dangerouslySetInnerHTML={{ __html: achievement}}
            >
            </Text>
        </Box>
    </Box>
);

const Mission = () => (
    <Box>
        <Heading
            size={'md'}
            children={'Mission'}
            textAlign={['center', 'left']}
            my={'8'}
        />

        <Box h={'sm'} p={'4'} overflowY={'scroll'}>
            <Text
                fontFamily={'heading'}
                letterSpacing={'widset'}
                textAlign={['center', 'left']}
                dangerouslySetInnerHTML={{ __html: mission }}
            >
                
            </Text>
        </Box>
    </Box>
);

const About = () => {

    const dispatch = useDispatch();
    const { message } = useSelector(state => state.profile);
    
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
                    <Button ml={["1", '']} variant={'ghost'} colorScheme="yellow">
                        Checkout Our Plan
                    </Button>
                </Link>
            </Stack>


            <VideoPlayer />

            <Mission mission={mission} />
            <Achievement achievement={achievement} />

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