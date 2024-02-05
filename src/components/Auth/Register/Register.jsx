import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./register.css"
import { Avatar, useColorMode } from '@chakra-ui/react';
import { Box, Button, Heading, Input } from '@chakra-ui/react'
import Aos from "aos";
import "aos/dist/aos.css"
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/actions/userAction';

export const fileUploadStyle = {
    '&::file-selector-button': {
        cursor: "pointer",
        marginLeft: "-10%",
        width: "120%",
        height: "100%",
        border: "none",
        color: "#ecc94b",
        backgroundColor: "white"
    }
};

const Register = () => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [name, setName] = useState(' ');
    const [imagePrev, setImagePrev] = useState('');
    const [image, setImage] = useState('');

    const dispatch = useDispatch();

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append("name", name);
        myForm.append("email", email);
        myForm.append("password", password);
        myForm.append("file", image);

        dispatch(register(myForm));

    }

    const { colorMode } = useColorMode();
    const container2 = colorMode === 'dark' ? 'container2-dark' : 'container2-light';

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section data-aos="fade-up" className="register">
            <div className="container">
                <div className="container1">
                    <div className={container2}>
                        <div data-aos="fade-down" className="content">
                            <Heading className='heading'>Registration</Heading><br />
                            <Box className="register-main-box">
                                <Avatar src={imagePrev} size={["xl", "2xl", "3xl", "2xl"]} />
                            </Box>
                            <form onSubmit={submitHandler}>
                                <Input
                                    required
                                    id="name"
                                    className={"register-input"}
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Full Name"
                                    type={"text"}
                                    focusBorderColor='yellow.500'
                                />

                                <Input
                                    required
                                    id="email"
                                    className={"register-input"}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="ash@gmail.com"
                                    type={"email"}
                                    focusBorderColor='yellow.500'
                                />

                                <Input
                                    required
                                    className="register-input"
                                    id="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="ashpro@123"
                                    type={"password"}
                                    focusBorderColor='yellow.500'
                                />
                                <Input
                                    required
                                    className="register-file-input"
                                    accept="image/*"
                                    height={["12vw", "10vw", "10vw", "3vw"]}
                                    fontSize={["4vw", "", "3.5vw", "1vw"]}
                                    id="chooseAvatar"
                                    type={"file"}
                                    css={fileUploadStyle}
                                    focusBorderColor='yellow.500'
                                    onChange={changeImageHandler}
                                />
                                <br />
                                <br />
                                <Button type="submit" className='register-btn' colorScheme={"yellow"}>
                                    <span>SignUp</span>
                                </Button>

                                <Box className="register-box" mt="4">
                                    Already have an account?{" "}
                                    <Link to="/login">
                                        <Button colorScheme={"yellow"} variant="link">
                                            Sign In
                                        </Button>
                                    </Link>
                                </Box>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register