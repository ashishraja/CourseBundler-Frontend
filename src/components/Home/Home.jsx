import React from 'react'
import {HStack , VStack ,Box ,  Stack ,Heading , Image , Text , Button} from "@chakra-ui/react"
import "./home.css"
import img from "./../../assets/images/1.png"
import {CgYoutube , CgGoogle} from "react-icons/cg"
import {SiCoursera , SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import video from "./../../assets/videos/video.mp4"

const Home = () => {
  return <section className="home">
    <div className="home-container">
        <Stack className='home-stack'>
            <VStack className="home-vstack">
                <Heading className="home-title" children="Learn from the Experts" />
                <Text className="home-text" children="Find valuable content at reasonable Price" />
                <a className="home-link" href='/courses' >
                    <Button colorScheme="yellow">
                        Explore Now
                    </Button>
                </a>
            </VStack>
            <div>
                <Image className="home-img" src={img} alt="logo-img" />
            </div>
        </Stack>
    </div>
    <Box className="home-box" bg={"blackAlpha.800"}>
        <Heading 
        className='home-heading'
        color={"yellow.400"}
        children="OUR BRANDS"
        />
        <HStack className='brands' >
            <CgGoogle />
            <CgYoutube />
            <SiCoursera />
            <SiUdemy />
            <DiAws />
        </HStack>
    </Box>
    <div className="container2">
        <video
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={video}
        >
        </video>
    </div>
  </section>
}

export default Home