import { Button, Container, Image , Heading, HStack,Text, Input, Stack, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./courses.css"
import {useDispatch, useSelector} from "react-redux";
import { getAllCourses } from '../../redux/actions/courseActions';
import { clearError, clearMessage } from '../../redux/reducers/courseReducer';
import toast from "react-hot-toast"
import { addToPlaylist } from '../../redux/actions/ProfileAction';
import { getMyProfile } from '../../redux/actions/userAction';

const Course = ({views,title,imageSrc,id,addToPlayListHandler,creator,description,lecturesCount,loading})=>{

    return(
        <VStack alignItems={["center","flex-start"]} m="4">
            <Image src={imageSrc} boxSize="64" objectFit={"cover"} />
            <Text 
            textAlign={["center","left"]}
            maxW="200px"
            fontFamily={"sans-serif"}
            noOfLines={3}
            children={title}
            />
            <Text maxW="200px" textAlign={["center","left"]} noOfLines={2} children={description} />
            <HStack>
                <Text 
                fontWeight={"bold"}
                textTransform="uppercase"
                children={"Creator"}
                />

                <Text 
                fontWeight={"body"}
                textTransform="uppercase"
                children={creator}
                />
            </HStack>
            <Text
             textAlign={"center"}
             children={`Views = ${views}`}
             textTransform="uppercase"
            />

            <Stack direction={["colum","row"]} alignItems="center">
                <Link to={`/course/${id}`}>
                    <Button colorScheme={"yellow"}>
                        Watch Now
                    </Button>
                </Link>
                <Button variant={"ghost"}
                colorScheme="yellow"
                isLoading={loading}
                onClick={()=> addToPlayListHandler(id)}
                >Add to PlayList </Button>
            </Stack>
        </VStack>
    );
};

const Courses = () => {
    const [keyword,setKeyword] = useState();
    const [category,setCategory] = useState();
    const dispatch = useDispatch();

    const addToPlayListHandler = async(courseId)=>{
        await dispatch(addToPlaylist(courseId));
        await dispatch(getMyProfile());
    }

    const categories = [
        "Web Devlopment" ,
        "Artificial Intelligence" ,
        "Data Scientist" ,
        "App Development" ,
        "Data Structures and Algorithms" , 
        "Game Development"
    ]

    const {loading , message , courses ,error} = useSelector(state=>state.course);
    useEffect(()=>{
        if(error){
            toast.error(error.toString());
            dispatch(clearError());
        }
        if(message){
            toast.success(message.message);
            dispatch(clearMessage());
        }
        dispatch(getAllCourses(category,keyword));
    },[category,keyword,dispatch,error,message]);

  return (
    <Container className="courses" minH={"95vh"} maxW="container.lg" paddingY={"8"}>
        <Heading children="All Courses" marginTop={"14"} marginBottom={"8"} />
        <Input 
        value={keyword} 
        onChange={e=>setKeyword(e.target.value)} 
        placeholder="Search a Course..."  
        type="text" 
        focusBorderColor="yellow.500" 
        />

        <HStack 
        overflowX={"auto"}
        paddingY="8" 
        css={
            {"&::-webkit-scrollbar":{
                display:"none"
            }}}
        >
            {categories.map((item,index) => (
                <Button key={index} onClick={()=>setCategory(item)} minW={"60"}>
                    <Text children={item} />
                </Button>
            ))}
        </HStack>

        <Stack
        direction={["column","row"]}
        flexWrap="wrap"
        justifyContent={["flex-start","space-evenly" ]}
        alignItems={["center","flex-start"]}
        >
            { 
                     Array.isArray(courses.courses) && courses.courses.length > 0 ?
                     (
                        courses.courses.map((item) => (
                            <Course
                                key={item._id}
                                title={item.title}
                                description={item.description}
                                views={item.views}
                                imageSrc={item.poster.url}
                                id={item._id}
                                creator={item.createdBy}
                                lecturesCount={item.numOfVideos}
                                addToPlayListHandler={addToPlayListHandler}
                                loading={loading}
                            />
                        ))
                     ):(
                        <Heading 
                        m="4"
                        children="Course Not Found"
                        />
                     )
            }
        </Stack>
    </Container>
  )
}

export default Courses