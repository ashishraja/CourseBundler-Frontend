import { Grid, Text, Button, Heading, Modal, Box, ModalContent, ModalBody, ModalCloseButton, ModalHeader, ModalOverlay, Stack, VStack, Input, ModalFooter } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../Profile/Profile';

const CourseModal = ({
    isOpen,
    courseTitle,
    onClose,
    id,
    deleteHandler,
    addLectureHandler,
    courseId,
    lectures,
    loading   
}) => {

    const [title, setTitle] = useState("");
    const [video, setVideo] = useState("");
    const [description, setDescription] = useState("");
    const [videoPrev, setVideoPrev] = useState("");

    const changeVideoHandler = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setVideoPrev(reader.result);
            setVideo(file);
        }
    }

    const handleClose = () => {
        setTitle("");
        setDescription("");
        setVideo("");
        setVideoPrev("");
        onClose();
    }

    return (
        <Modal isOpen={isOpen} size="full" onClose={handleClose} scrollBehavior="outside">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {courseTitle}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p="16">
                    <Grid templateColumns={["1fr", "3fr 1fr"]} >
                        <Box px={["0", "16"]}>
                            <Box my={"5"}>
                                <Heading children={courseTitle} />
                                <Heading children={`#${id}`} size="sm" opacity={.4} />
                            </Box>

                            <Heading children={'Lectures'} size="lg" />
                            {
                                lectures &&  lectures.map((item, i) => (
                                    <VideoCard
                                        key={i}
                                        num={i + 1}
                                        description={item.description}
                                        title={item.title}         
                                        deleteHandler={deleteHandler}                               
                                        courseId={id}
                                        lectureId={item._id}
                                        isLoading={loading}
                                    />
                                ))
                            }
                        </Box>


                        <Box mt={["10vw","0vw"]}>
                            <form onSubmit={e => addLectureHandler(e, title ,courseId, video, description )}>
                                <VStack spacing={"4"}>
                                    <Heading children={"Add Lecture"}
                                        size={"md"}
                                        textTransform={"uppercase"} />
                                    <Input
                                        focusBorderColor='purple.300'
                                        placeholder="Title"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                    <Input
                                        focusBorderColor='purple.300'
                                        placeholder="Description"
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                    />

                                    <Input
                                        accept="video/*"
                                        required
                                        type={'file'}
                                        name="file"
                                        focusBorderColor='purple.300'
                                        css={{
                                            '&::file-selector-button': {
                                                ...fileUploadCss, color: "purple"
                                            }
                                        }}
                                        onChange={changeVideoHandler}
                                    />
                                    {
                                        videoPrev && (
                                            <video
                                                controlsList='nodownload'
                                                controls
                                                src={videoPrev} >
                                            </video>
                                        )
                                    }

                                    <Button isLoading={loading} w={"full"} colorScheme={"purple"} type="submit">
                                        Upload
                                    </Button>
                                </VStack>

                            </form>
                        </Box>

                    </Grid>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={handleClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default CourseModal

function VideoCard({ num, description, title, deleteHandler, courseId, lectureId , loading }) {
    return (
        <Stack direction={["column", "row"]} my="8" borderRadius={"lg"} boxShadow={"0 0 10px rgba(107,70,193,.5)"}
            justifyContent={["flex-start", "space-between"]} p={["4", "8"]}>
            <Box>
                <Heading size={"sm"}>{`${num} ${title}`}</Heading>
                <Text>{description}</Text>
            </Box>

            <Button isLoading={loading} color={"purple.600"} onClick={() => deleteHandler(courseId, lectureId)}>
                <RiDeleteBin7Fill />
            </Button>
        </Stack>
    );
}
