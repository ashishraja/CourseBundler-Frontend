import React, { useEffect } from 'react'
import { HStack, VStack, Box, Stack, Heading, Image, Text, Button } from "@chakra-ui/react"
import "./home.css"
import blackImg from "./../../assets/images/logoblack.png"
import whiteImg from "./../../assets/images/logowhite.png"
import logoImg from "./../../assets/images/4891599.png"
import { CgYoutube, CgGoogle } from "react-icons/cg"
import { SiCoursera, SiUdemy } from "react-icons/si"
import { DiAws } from "react-icons/di"
import video from "./../../assets/videos/video.mp4"
import { useColorMode } from '@chakra-ui/react';
import DevInvension from '../devInvension/devInvension.js'
import Aos from "aos";
import "aos/dist/aos.css"
import CardDiv from './CardDiv'
// import Chatbot  from '../ChatBot/Chatbot'

const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
}, [])

  const { colorMode } = useColorMode();
  // const homeimg = colorMode === 'dark' ? whiteImg : blackImg;

  return <section className="home">
    <div className="home-container">
      <div className="home-container-left">
        <p>Bharat's <span>Biggest & <br />  Most Trusted </span> <br /> Sewing Educational <br /> Platform</p>
        <a href='/courses'>
          <button className='home-container-button'>Explore Our Courses</button>
        </a>
      </div>
      <div className="home-container-right">  <Image className="home-container-img" src={logoImg} alt="logo-img" /></div>
    </div>

    {/* <Chatbot /> */}

    <div className='home-content-div'>
      <h1>A Platform Trusted by Students Worldwide</h1>
      <p>Don't Just Take Our Word for It. Delve into the Numbers and Witness the Excellence for Yourself!</p>
    </div>

    <div className="home-boxes-container">
      <div data-aos="fade-up" className="home-boxes-box box1">
        <div className="home-boxes-content">
          <h3>15 Million +</h3>
          <p>Happy Students</p>
        </div>
        <img
          src="https://via.placeholder.com/150?text=Image+1"
          alt="Image 1"
          className="home-boxes-image"
        />
      </div>
      <div data-aos="fade-up" className="home-boxes-box box2">
        <div className="home-boxes-content">
          <h3>24000+</h3>
          <p>Mock Tests</p>
        </div>
        <img
          src="https://via.placeholder.com/150?text=Image+2"
          alt="Image 2"
          className="home-boxes-image"
        />
      </div>
      <div data-aos="fade-up" className="home-boxes-box box3">
        <div className="home-boxes-content">
          <h3>14000+</h3>
          <p>Video Lectures</p>
        </div>
        <img
          src="https://via.placeholder.com/150?text=Image+3"
          alt="Image 3"
          className="home-boxes-image"
        />
      </div>
      <div data-aos="fade-up" className="home-boxes-box box4">
        <div className="home-boxes-content">
          <h3>8000+</h3>
          <p>Practice Questions</p>
        </div>
        <img
          src="https://via.placeholder.com/150?text=Image+3"
          alt="Image 3"
          className="home-boxes-image"
        />
      </div>
    </div>

    
    <div className='get-started-button'>
      <a href='/courses'>
        <button className='home-container-button'>Explore Our Courses</button>
      </a>
    </div>

    <DevInvension />

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
   <h1 className='most-viewed-courses'>Most Viewed Courses</h1>
   <CardDiv />
  </section>
}

export default Home