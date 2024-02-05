import { Grid, Image , Container, Heading, VStack, Select, Input, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../../redux/actions/adminAction';
import { clearError , clearMessage } from '../../../redux/reducers/adminReducer';
import { fileUploadCss } from '../../Profile/Profile';
import Sidebar from '../Sidebar'

const CreateCourse = () => {

    const [title, setTitle] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState();
    const [imgPrev, setImgPrev] = useState();
    const dispatch = useDispatch();

    const {message,error,loading} = useSelector(state=>state.admin);

    const categories = [
        "Web Development",
        "Artificial Intelligence",
        "Data Scientist",
        "App Development",
        "Data Structures and Algorithms",
        "Game Development"
    ];

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImgPrev(reader.result);
            setImg(file);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append("title", title);
        myForm.append("description", description);
        myForm.append("category", category);
        myForm.append("createdBy", createdBy);
        myForm.append("file", img);

        dispatch(createCourse(myForm));
    }

    useEffect(()=>{

        if(error){
            toast.error(error.toString());
            dispatch(clearError());
        }

        if(message && message.message){
            toast.success(message.message);
            dispatch(clearMessage());
        }
    },[dispatch,error,message]);

    return (
        <Grid
            minH={'100vh'} padding="7vw 0 0 0" templateColumns={["1fr", "5fr 1fr"]}
            css={{ cursor: 'url() , default' }}
        >
            <Container py="16">
                <form onSubmit={submitHandler}>
                    <Heading textTransform={"uppercase"} children="Create Course" my="16" textAlign={["center", "left"]} />
                    <VStack margin={"auto"} spacing="8" >
                        <Input
                            required
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Title"
                            type={"text"}
                            focusBorderColor={"purple.300"}
                        />
                        <Input
                            required
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Description"
                            type={"text"}
                            focusBorderColor={"purple.300"}
                        />
                        <Input
                            required
                            value={createdBy}
                            onChange={e => setCreatedBy(e.target.value)}
                            placeholder="Creator Name"
                            type={"text"}
                            focusBorderColor={"purple.300"}
                        />

                        <Select focusBorderColor='purple.300' value={category}
                            onChange={e => setCategory(e.target.value)}>
                            {categories.map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </Select>
                        <Input
                            required
                            accept="image/*"
                            height={["12vw", "10vw", "10vw", "3vw"]}
                            fontSize={["4vw", "", "3.5vw", "1vw"]}
                            id="chooseAvatar"
                            type={"file"}
                            css={{
                                '&::file-selector-button':{
                                    ...fileUploadCss,
                                    color:"purple",
                                },
                            }}
                            focusBorderColor='yellow.500'
                            onChange={changeImageHandler}
                        />
                        {
                            imgPrev && (
                                <Image src={imgPrev} boxSize="64" objectFit={"contain"} />
                            )
                        }
                        <Button isLoading={loading} colorScheme={"purple"} w="full" type="submit">Create</Button>
                    </VStack>
                </form>
            </Container>
            <Sidebar />
        </Grid>
    )
}

export default CreateCourse