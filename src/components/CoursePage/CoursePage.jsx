import React, { useEffect, useState } from 'react'
import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react"
// import video from "./../../assets/videos/video.mp4"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCourseLectures } from '../../redux/actions/courseActions';
import "./CoursePage.css"
import Loader from '../Layout/Loader/Loader';

const CoursePage = ({ user }) => {


    const [lectureNumber, setLectureNumber] = useState(0);
    const { lectures, loading } = useSelector(state => state.course);

    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        if (user) {
            if (user.role !== "admin" && (user.subscription === undefined || user.subscription.status !== "active")) {
                navigate("/subscribe");
            }
        }

        dispatch(getCourseLectures(id));

    }, [dispatch, id, user, navigate]);



    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <>
                        <Grid minH={"90vh"} templateColumns={["1fr", "3fr 1fr"]} className="coursePage-grid">
                            {
                                lectures &&  lectures.lectures && lectures.lectures.length && lectures.lectures.length > 0 ?
                                    (
                                        <>
                                            <Box className="videoBox">
                                                <video
                                                    width={"100%"}
                                                    autoPlay
                                                    controls
                                                    controlsList="nodownload nofullscreen noremoteplayback"
                                                    disablePictureInPicture
                                                    disableRemotePlayback
                                                    src={lectures.lectures[lectureNumber].video.url}
                                                >
                                                </video>
                                                <Heading m="4" children={`#${lectureNumber + 1} ${lectures.lectures[lectureNumber].title}`} />
                                                {/* <Heading m="4" children="Description" />
                                                <Text m="4" children={lectures.lectures[lectureNumber].description} /> */}
                                            </Box>

                                            <VStack>
                                                {
                                                    lectures && lectures.lectures.map((element, index) => (
                                                        <button
                                                            onClick={() => setLectureNumber(index)}
                                                            key={element._id}
                                                            style={{
                                                                width: "100%",
                                                                padding: "1rem",
                                                                textAlign: "center",
                                                                margin: 0,
                                                                borderBottom: "1px solid rgba(0,0,0,.2)"
                                                            }}
                                                        >
                                                            <Text noOfLines={1}>
                                                                #{index + 1} {element.title}
                                                            </Text>
                                                        </button>
                                                    ))
                                                }
                                            </VStack>
                                        </>
                                    ) : (
                                        <Heading children="No Lectures Found" className="coursePage-heading"/>
                                    )
                            }
                        </Grid>
                    </>
                )
            }
        </>
    )
}

export default CoursePage