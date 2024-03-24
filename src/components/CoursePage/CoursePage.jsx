import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Heading, Text, VStack, Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCourseById, getCourseLectures } from '../../redux/actions/courseActions';
import "./CoursePage.css";
import Loader from '../Layout/Loader/Loader';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';

const CoursePage = ({ user }) => {
    const params = useParams();
    const courseId = params.id;
    const [lectureNumber, setLectureNumber] = useState(0);
    const [completed, setCompleted] = useState(Array(5).fill(false)); // Array to track completion status of each lecture
    const { courses , lectures, loading } = useSelector(state => state.course);
    const currentCourse = courses && courses.course && courses.course.title;
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const toast = useToast();
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = useRef(null);
    const video = videoRef.current;
    const todaysDate = new Date().toISOString().slice(0, 10);

    useEffect(() => {
        if (user) {
            if (user.role !== "admin" && (user.subscription === undefined || user.subscription.status !== "active")) {
                navigate("/subscribe");
            }
        }
        dispatch(getCourseById(courseId));
        dispatch(getCourseLectures(id));
    }, [dispatch, id, user, navigate]);

    const totalLectures = lectures?.lectures?.length || 0;

    useEffect(() => {
        if (totalLectures > 0) {
            setCompleted(Array(totalLectures).fill(false)); // Initialize completion status array when lectures are available
        }
    }, [totalLectures]);

    // const handleNextLecture = () => {
    //     const percentWatched = (currentTime / duration) * 100;
    //     if (percentWatched === 100 && lectureNumber < totalLectures - 1) {
    //         setLectureNumber(prev => prev + 1); // Move to the next lecture if current lecture is completed
    //         const newCompleted = [...completed];
    //         newCompleted[lectureNumber] = true; // Set completion status for the current lecture
    //         setCompleted(newCompleted);
    //     }
    // };

    const handleNextLecture = () => {
        const percentWatched = (currentTime / duration) * 100;
        if (lectureNumber === 0 && percentWatched === 100) {
            setLectureNumber(prev => prev + 1); // Move to the next lecture if current lecture is completed
            const newCompleted = [...completed];
            newCompleted[lectureNumber] = true; // Set completion status for the current lecture
            setCompleted(newCompleted);
        } else if (lectureNumber > 0 && lectureNumber < totalLectures - 1 && completed[lectureNumber]) {
            setLectureNumber(prev => prev + 1); // Move to the next lecture if the current lecture is completed
        }
    };
    

    const handlePrevLecture = () => {
        if (lectureNumber > 0) {
            setLectureNumber(prev => prev - 1); // Move to the previous lecture
        }
    };

    const handleTimeUpdate = () => {
        // Track video progress
        if (video && video.currentTime && video.duration) {
            setCurrentTime(video.currentTime);
            setDuration(video.duration);
            // const percentWatched = (video.currentTime / video.duration) * 100;
            // console.log("Percent watched: " + percentWatched.toFixed(2) + "%");
        }
    };

    const handleDownloadCertificate = () => {

        generateCertificate(user.name,currentCourse , todaysDate, "12322", todaysDate);
    };

    const generateCertificate = (learnerName, courseName, completedDate, serialNumber, dateIssued) => {
                const htmlTemplate = `
                  <html>
                    <head>
                      <meta charset="UTF-8">
                      <style>
                        .signature,
                        .title {
                          float: left;
                          border-top: 1px solid #000;
                          width: 200px;
                          text-align: center;
                        }
                      </style>
                      <link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet">
                    </head>
                    <body>
                      <center>
                        <div style="width:800px; height:600px; padding:20px; text-align:center; border: 10px solid #787878;font-family: Roboto">
                          <div style="width:750px; height:550px; padding:20px; text-align:center; border: 5px solid #787878">
                            <div>
                              <img src="https://diy-assets.classplus.co/_next/image?url=https://ali-cdn-diy-public.classplus.co/prod/2_1699159409371.png&w=1920&q=75" alt="PIX Series" title="Logo" style="height: 3.8rem;">
                            </div>
                            <span style="font-size:50px; font-weight:bold">Certificate of Completion</span>
                            <br><br>
                            <span style="font-size:25px"><i>This is to certify that</i></span>
                            <br><br>
                            <span style="font-size:30px"><b>${learnerName}</b></span><br /><br />
                            <span style="font-size:25px"><i>has completed the course</i></span> <br /><br />
                            <span style="font-size:30px">${courseName}</span> <br /><br />
                            <span style="font-size:25px"><i>Completed Date</i></span><br>
                            <span style="font-size:25px"><i>${completedDate}</i></span><br>
                            <br>
                            <br>
                            <br>
                            <table style="width: 100%;">
                              <tr>
                                <td><b>Raja Rani Coaching</b></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td style="border:0;border-bottom:1px solid #000;"></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td style="text-align:center"><b>Signature</b></td>
                                <td style="text-align: right;">${serialNumber}<br>Issued On: <b>${dateIssued}</b></td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </center>
                      </center>
                    </body>
                  </html>
                `;
                const div = document.createElement('div');
                div.innerHTML = htmlTemplate;
                document.body.appendChild(div);
          
                html2canvas(div).then(canvas => {       
                document.body.removeChild(div);
          
                 
                  canvas.toBlob(function(blob) {
                    saveAs(blob, `Certificate_${learnerName}.png`);
                  });
                });
                const blob = new Blob([htmlTemplate], { type: 'text/html' });
                const url = URL.createObjectURL(blob);
        
                const newWindow = window.open(url, '_blank');
        
                if (newWindow) {
                    newWindow.focus();
                } else {
                    alert('Please allow pop-ups for this website to generate the certificate.');
                }
        
            };
    const progress = ((completed.filter(status => status).length) / totalLectures) * 100;

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Grid minH={"90vh"} templateColumns={["1fr", "3fr 1fr"]} className="coursePage-grid">
                        {lectures && lectures.lectures && lectures.lectures.length && lectures.lectures.length > 0 ? (
                            <>
                                <Box className="videoBox">
                                    <video
                                        ref={videoRef}
                                        width={"100%"}
                                        autoPlay
                                        controls
                                        controlsList="nodownload nofullscreen noremoteplayback"
                                        disablePictureInPicture
                                        disableRemotePlayback
                                        src={lectures.lectures[lectureNumber].video.url}
                                        onTimeUpdate={handleTimeUpdate}
                                    >
                                    </video>
                                    <Heading m="4" children={`#${lectureNumber + 1} ${lectures.lectures[lectureNumber].title}`} />
                                </Box>

                                <VStack>
                                    {lectures.lectures.map((element, index) => (
                                        <button
                                            onClick={() => setLectureNumber(index)}
                                            key={element._id}
                                            style={{
                                                width: "100%",
                                                padding: "1rem",
                                                textAlign: "center",
                                                margin: 0,
                                                borderBottom: "1px solid rgba(0,0,0,.2)",
                                                backgroundColor: index === lectureNumber ? "#FFD700" : (completed[index] ? "#028a0f" : "lightgray") // Change background color based on completion status
                                            }}
                                        >
                                            <Text noOfLines={1}>
                                                #{index + 1} {element.title}
                                            </Text>
                                        </button>
                                    ))}
                                    {lectureNumber > 0 && (
                                        <Button onClick={handlePrevLecture}>Previous Lecture</Button> // Display "Previous" button if not at the first lecture
                                    )}
                                    {lectureNumber === totalLectures - 1 ? (
                                        <Button onClick={handleDownloadCertificate}>Download Certificate</Button> // Display "Download Certificate" button if at the last lecture
                                    ) : (
                                        <Button onClick={handleNextLecture} disabled={currentTime < duration}>Next Lecture</Button> // Disable "Next" button if video is not completed
                                    )}
                                    <h1>{progress}</h1>
                                </VStack>
                            </>
                        ) : (
                            <Heading children="No Lectures Found" className="coursePage-heading" />
                        )}
                    </Grid>
                </>
            )}
        </>
    )
}

export default CoursePage;
