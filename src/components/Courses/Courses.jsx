// import { Button, Container, Image , Heading, HStack,Text, Input, Stack, VStack } from '@chakra-ui/react';
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import "./courses.css"
// import {useDispatch, useSelector} from "react-redux";
// import { getAllCourses } from '../../redux/actions/courseActions';
// import { clearError, clearMessage } from '../../redux/reducers/courseReducer';
// import { toast } from "react-toastify"
// import { addToPlaylist } from '../../redux/actions/ProfileAction';
// import { getMyProfile } from '../../redux/actions/userAction';
// import { toastDisplay } from '../Profile/UpdateProfile';

// const Course = ({views,title,imageSrc,id,addToPlayListHandler,creator,description,lecturesCount,loading})=>{

//     return(
//         <VStack className = "course-cart" alignItems={["center","flex-start"]} m="4">
//             <Image src={imageSrc} boxSize="64" objectFit={"cover"} />
//             <Text 
//             textAlign={["center","left"]}
//             maxW="200px"
//             fontFamily={"sans-serif"}
//             noOfLines={3}
//             children={title}
//             />
//             <Text maxW="200px" textAlign={["center","left"]} noOfLines={2} children={description} />
//             <HStack>
//                 <Text 
//                 fontWeight={"bold"}
//                 textTransform="uppercase"
//                 children={"Creator"}
//                 />

//                 <Text 
//                 fontWeight={"body"}
//                 textTransform="uppercase"
//                 children={creator}
//                 />
//             </HStack>
//             <Text
//              textAlign={"center"}
//              children={`Views = ${views}`}
//              textTransform="uppercase"
//             />

//             <Stack direction={["colum","row"]} alignItems="center">
//                 <Link to={`/course/${id}`}>
//                     <Button type="button" colorScheme={"yellow"}>
//                         Watch Now
//                     </Button>
//                 </Link>
//                 <Button variant={"ghost"}
//                 colorScheme="yellow"
//                 isLoading={loading}
//                 onClick={()=> addToPlayListHandler(id)}
//                 >Add to PlayList </Button>
//             </Stack>
//         </VStack>
//     );
// };


// const Courses = () => {
//     const [keyword,setKeyword] = useState();
//     const [category,setCategory] = useState();
//     const dispatch = useDispatch();

//     const addToPlayListHandler = async(courseId)=>{
//         await dispatch(addToPlaylist(courseId));
//     }

//     const categories = [
//         "All Courses",
//         "Blouse Mastery" ,
//         "Western Style" ,
//         "Neck Blouse " ,
//         "Multi Purpose Gown " , 
//         "Men's Shirt "
        
//     ]

//     const {loading , message , courses ,error} = useSelector(state=>state.course);
//     useEffect(()=>{
//         if(error){
//             toast.error(error.toString() , toastDisplay);
//             dispatch(clearError());
//         }
//         if(message){
//             toast.success(message.message , toastDisplay);
//             dispatch(getMyProfile());
//             dispatch(clearMessage());
//         }
//         dispatch(getAllCourses(category,keyword));
//     },[category,keyword,dispatch,error,message]);

//   return (
//     <Container className="courses" minH={"95vh"} maxW="container.lg" paddingY={"8"}>
//         <Heading children="All Courses" marginTop={"14"} marginBottom={"8"} />
//         <Input 
//         value={keyword} 
//         onChange={e=>setKeyword(e.target.value)} 
//         placeholder="Search a Course..."  
//         type="text" 
//         focusBorderColor="yellow.500" 
//         />

//         <HStack 
//         overflowX={"auto"}
//         paddingY="8" 
//         css={
//             {"&::-webkit-scrollbar":{
//                 display:"none"
//             }}}
//         >
//             {categories.map((item,index) => (
//                 <Button key={index} onClick={()=>setCategory(item)} minW={"60"}>
//                     <Text children={item} />
//                 </Button>
//             ))}
//         </HStack>

//         <Stack
//         direction={["column","row"]}
//         flexWrap="wrap"
//         justifyContent={["flex-start","space-evenly" ]}
//         alignItems={["center","flex-start"]}
//         >
//             { 
//                      Array.isArray(courses.courses) && courses.courses.length > 0 ?
//                      (
//                         courses.courses.map((item) => (
//                             <Course
//                                 key={item._id}
//                                 title={item.title}
//                                 description={item.description}
//                                 views={item.views}
//                                 imageSrc={item.poster.url}
//                                 id={item._id}
//                                 creator={item.createdBy}
//                                 lecturesCount={item.numOfVideos}
//                                 addToPlayListHandler={addToPlayListHandler}
//                                 loading={loading}
//                             />
                            
//                         ))
//                      ):(
//                         <Heading 
//                         m="4"
//                         children="Course Not Found"
//                         />
//                      )
//             }
//         </Stack>
//     </Container>
//   )
// }

// export default Courses

import React, { useEffect, useState } from 'react';
import { Button, Container, Image , Heading, HStack,Text, Input, Stack, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/courseActions';
import { clearError, clearMessage } from '../../redux/reducers/courseReducer';
import { toast } from 'react-toastify';
import { addToPlaylist } from '../../redux/actions/ProfileAction';
import { getMyProfile } from '../../redux/actions/userAction';
import { toastDisplay } from '../Profile/UpdateProfile';

const Course = ({
    views,
    title,
    imageSrc,
    id,
    addToPlayListHandler,
    creator,
    description,
    lecturesCount,
    loading
  }) => {
    return (
      <VStack
        className="course-card unique-course-card" // Added custom class names
        alignItems={["center", "flex-start"]}
        m="4"
        p="4"
        borderRadius="md"
        boxShadow="md"
        borderWidth="1px"
        borderColor="gray.200"
        maxW="300px"
        // maxH="600px"
        bg="white"
        color="black"
      >
        <Image src={imageSrc} className="course-image" ml="2"boxSize="200px" objectFit="contain" borderRadius="md" /> {/* Added custom class name */}
        <Text
          textAlign={["center", "left"]}
          maxW="210px"
          fontFamily="sans-serif"
          fontWeight="semibold"
          fontSize="lg"
          noOfLines={2}
          mt="2"
          pl="2"
          className="course-title" // Added custom class name
        >
          {title}
        </Text>
        <Text
          maxW="200px"
          textAlign={["center", "left"]}
          noOfLines={3}
          pl="2"
          fontSize="sm"
          color="gray.600"
          className="course-description" // Added custom class name
        >
          {description}
        </Text>
        <HStack pl="2"spacing="2" mt="2">
          <Text fontWeight="bold" color="gray.700">
            Creator:
          </Text>
          <Text color="gray.600" className="course-creator"> {/* Added custom class name */}
            {creator}
          </Text>
        </HStack>
        <Text pl="2"textAlign="center" mt="2" fontSize="md" color="gray.600">
          <b>Views: </b> {views}
        </Text>
        <Stack direction={["column", "row"]} alignItems="center" mt="4" spacing="2">
          <Link to={`/course/${id}`}>
            <Button colorScheme="yellow" variant="solid" size="sm" className="watch-now-button"> {/* Added custom class name */}
              Watch Now
            </Button>
          </Link>
          <Button
            variant="ghost"
            colorScheme="blue"
            isLoading={loading}
            onClick={() => addToPlayListHandler(id)}
            size="sm"
            className="add-to-playlist-button" // Added custom class name
          >
            Add to Playlist
          </Button>
        </Stack>
      </VStack>
    );
  };
const Courses = () => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('All Courses');
    const dispatch = useDispatch();

    const addToPlayListHandler = async (courseId) => {
        await dispatch(addToPlaylist(courseId));
    };

    const categories = [
        "All Courses",
        "Blouse Mastery",
        "Western Style",
        "Neck Blouse",
        "Multi Purpose Gown",
        "Men's Shirt"
    ];

    const { loading, message, courses, error } = useSelector(state => state.course);

    useEffect(() => {
        if (error) {
            toast.error(error.toString(), toastDisplay);
            dispatch(clearError());
        }
        if (message) {
            toast.success(message.message, toastDisplay);
            dispatch(getMyProfile());
            dispatch(clearMessage());
        }
        dispatch(getAllCourses(category === 'All Courses' ? '' : category, keyword));
    }, [category, keyword, dispatch, error, message]);

    return (
        <Container className="courses" minH={"95vh"} maxW="container.lg" paddingY={"8"}>
            <Heading children="All Courses" marginTop={"20"} marginBottom={"8"} />
            <Input
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
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
                {categories.map((item, index) => (
                    <Button key={index} onClick={() => setCategory(item)} minW={"60"}>
                        <Text children={item} />
                    </Button>
                ))}
            </HStack>

            <Stack
                direction={["column", "row"]}
                flexWrap="wrap"
                justifyContent={["flex-start", "space-evenly"]}
                alignItems={["center", "flex-start"]}
            >
                {loading ? (
                    <Heading m="4" children="Loading..." />
                ) : (
                    Array.isArray(courses.courses) && courses.courses.length > 0 ? (
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
                    ) : (
                        <Heading m="4" children="Course Not Found" />
                    )
                )}
            </Stack>
        </Container>
    )
}

export default Courses;
