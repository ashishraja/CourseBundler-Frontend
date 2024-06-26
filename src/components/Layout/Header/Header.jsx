import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from "@chakra-ui/react"
import { RiDashboardFill, RiLogoutBoxRLine, RiMenu5Fill } from "react-icons/ri"
import { Link, useNavigate } from 'react-router-dom'
import "./header.css"
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/actions/userAction.js'
import { toast } from 'react-toastify'
import { clearMessage } from '../../../redux/reducers/userReducer'
import { toastDisplay } from '../../Profile/UpdateProfile'
import Cookies from 'js-cookie'
import { Image } from "@chakra-ui/react"
import blackImg from "./../../../assets/images/logoblack.png"
import whiteImg from "./../../../assets/images/logowhite.png"
import { useColorMode } from '@chakra-ui/react';
const LinkButton = ({ url = "/", title = "Home", onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={"ghost"}>{title}</Button>
  </Link>
)

const Header = ({ isAuthenticated = false, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const homeimg = whiteImg;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    onClose();
    await dispatch(logout());
    toast.success("Logged Out Successfully", toastDisplay);
    Cookies.remove('userToken');
    dispatch(clearMessage());
    navigate("/");
  }

  return (
    <div className="header-mainDiv">
      <div className="header-img">
        <Image className="home-img" src={homeimg} alt="logo-img" />
      </div>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme={"yellow"}
        width="12"
        height={"12"}
        rounded="full"
        zIndex={"overlay"}
        position={"fixed"}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
        
      </Button>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={"blur(3px)"} />
        <DrawerContent>
          <DrawerHeader>COURSE BUILDER</DrawerHeader>
          <DrawerBody>
            <VStack spacing={"4"} alignItems="flex-start">

              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton onClose={onClose} url="/courses" title="Browse all the courses" />
              <LinkButton onClose={onClose} url="/forum" title="Community Forum" />
              <LinkButton onClose={onClose} url="/request" title="Request a Course" />
              <LinkButton onClose={onClose} url="/contact" title="Contact" />
              <LinkButton onClose={onClose} url="/about" title="About" />
              <LinkButton onClose={onClose} url="/room/26Dev" title="Live Stream Room" />
              <LinkButton onClose={onClose} url="/feedbacks" title="Feedbacks" />

              <HStack
                justifyContent={"space-evenly"}
                position="absolute"
                bottom={"2rem"}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button cursor="pointer" variant={"ghost"} colorScheme={"yellow"}>Profile</Button>
                        </Link>
                        <Link onClick={onClose} to="/">
                          <Button cursor="pointer" variant={"ghost"} onClick={logoutHandler}>
                            <RiLogoutBoxRLine />
                            Logout
                          </Button>
                        </Link>
                      </HStack>
                      {
                        user && user.role === "admin" &&
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button marginRight={"7"} cursor="pointer" colorScheme={"purple"} variant="ghost">
                            <RiDashboardFill style={{ margin: "4px" }} />
                            Dashboard
                          </Button>
                        </Link>
                      }
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button cursor="pointer" colorScheme={"yellow"}>Login</Button>
                    </Link>

                    <p>OR</p>

                    <Link onClick={onClose} to="/register">
                      <Button cursor="pointer" colorScheme={"yellow"}>Sign-Up</Button>
                    </Link>
                  </>
                )}

              </HStack>

            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Header
