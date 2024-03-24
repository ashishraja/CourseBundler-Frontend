import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { DiGithub } from 'react-icons/di'
import {TiSocialInstagramCircular , TiSocialYoutubeCircular,TiSocialTwitter,TiSocialFacebookCircular} from "react-icons/ti"

const Footer = () => {
  return (
    <Box marginTop={""} padding={"4"} bg="blackAlpha.900" minH={"10vh"}>
        <Stack direction={["column" , "row"]}>
            <VStack alignItems={["center","flex-start"]} width="full">
                <Heading children="All Rights Reserved" color="white" />
                <Heading 
                fontFamily={"body"}
                size={"sm"}
                children="@RajaraniCoaching"
                color={"yellow.400"}
                />
            </VStack>
            <HStack 
            spacing={["2","10"]}
            justifyContent="center"
            color="white"
            fontSize="50"
            marginRight={["0","500px"]}
            >
                <a href="https://www.youtube.com/@rajaranicoaching" target={"_blank"}>
                    <TiSocialYoutubeCircular />
                </a>
                <a href="https://www.instagram.com/rajarani_coaching/" target={"_blank"}>
                    <TiSocialInstagramCircular />
                </a>
                <a href="https://twitter.com/@coachingRR" target={"_blank"}>
                <TiSocialTwitter />
                </a>
                <a href="https://www.facebook.com/rajaranicoaching" target={"_blank"}>
                <TiSocialFacebookCircular />
                </a>
            </HStack>
        </Stack>
        
    </Box>
  )
}

export default Footer