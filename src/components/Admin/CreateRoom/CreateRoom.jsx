// import React from 'react'
import { Grid, Image , Container, Heading, VStack, Select, Input, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createRoom } from '../../../redux/actions/adminAction';
import { clearError , clearMessage } from '../../../redux/reducers/adminReducer';
import { fileUploadCss } from '../../Profile/Profile';
import Sidebar from '../Sidebar'
import { toastDisplay } from '../../Profile/UpdateProfile';


const CreateRoom = () => {
    const [roomCode, setRoomCode] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(roomCode);
        navigate(`/room/${roomCode}`);
    }
    return (
        <Grid
            minH={'100vh'} padding="7vw 0 0 0" templateColumns={["1fr", "5fr 1fr"]}
            css={{ cursor: 'url() , default' }}
        >
            <Container py="16">
                <form onSubmit={handleSubmit}>
                    <Heading textTransform={"uppercase"} children="Create Room" my="16" textAlign={["center", "left"]} />
                    <VStack margin={"auto"} spacing="8" >
                        <Input
                            required
                            value={roomCode}
                            onChange={e => setRoomCode(e.target.value)}
                            placeholder="Enter Room Code"
                            type={"text"}
                            focusBorderColor={"purple.300"}
                        />
                       
                        <Button colorScheme={"purple"} w="full" type="submit">Create</Button>
                    </VStack>
                </form>
            </Container>
            <Sidebar />
        </Grid>
    )
}


export default CreateRoom





