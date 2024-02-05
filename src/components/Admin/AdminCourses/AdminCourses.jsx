import { Grid, Box, Heading, Table, Image, TableContainer, TableCaption, Thead, Tr, Th, Tbody, Td, HStack, Button, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar'
import CourseModal from './CourseModal';
import { getAllCourses, getCourseLectures } from '../../../redux/actions/courseActions';
import { addLectures, deleteCourse, deleteLectures } from '../../../redux/actions/adminAction';
import { toast } from 'react-hot-toast';
import { clearError, clearMessage } from '../../../redux/reducers/adminReducer';
import Loader from '../../Layout/Loader/Loader';

const AdminCourses = () => {

  const { loading: courseLoading, courses, lectures } = useSelector(state => state.course);
  const { loading, error, message } = useSelector(state => state.admin);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [courseId, setCourseId] = useState();
  const [courseTitle, setCourseTitle] = useState();
  
  const courseDetailsHandler = (courseId, title) => {
    dispatch(getCourseLectures(courseId));
    onOpen();
    setCourseId(courseId);
    setCourseTitle(title)
  }

  const deleteHandler = async (courseId) => {
    await dispatch(deleteCourse(courseId));
    dispatch(getAllCourses());
  }

  const deleteLectureHandler = async (courseId, lectureId) => {
    await dispatch(deleteLectures(courseId, lectureId));
    await dispatch(getCourseLectures(courseId));
  }

  const addLectureHandler = async (e, title, CourseId, video, description) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);

    await dispatch(addLectures(courseId, myForm));
    await dispatch(getCourseLectures(courseId));
  }

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error.toString());
      dispatch(clearError());
    }

    if (message && message.message) {
      toast.success(message.message);
      dispatch(clearMessage());
    }

    dispatch(getAllCourses());

  }, [dispatch, message, error]);

  return (
    <>
      {
        courseLoading ? (
          <Loader />
        ) : (
          <Grid
            minH={'100vh'} padding={"7vw 0 0 0"} templateColumns={["1fr", "5fr 1fr"]}
            css={{ cursor: 'url() , default' }}
          >
            <Box
              padding={["0", "8"]}
            >
              <Heading
                textTransform={"uppercase"}
                children={"All Courses"}
                p={["10vw 0 0 0", "0"]}
                my="16"
                textAlign={["center", "center"]}
              />
              <TableContainer
                w={["100vw", "65vw", "60vw", "72vw"]} boxShadow={"-2px 0 15px rgba(107,70,193,.5)"} >
                <Table variant={"simple"} size={"lg"} boxShadow={"-2px 0 15px rgba(107,70,193,.5)"} >
                  <TableCaption p={["0 0 5vw 0", "0 0 1vw 0"]} >All available Courses in the database</TableCaption>
                  <Thead boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>
                    <Tr boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} >
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>Id</Th>
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>Poster</Th>
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>Title</Th>
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>Category</Th>
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>Creator</Th>
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} isNumeric>Views</Th>
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} isNumeric>Lectures</Th>
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} isNumeric>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      Array.isArray(courses.courses) && courses.courses.map(item => (
                        <Row loading={loading} courseDetailsHandler={courseDetailsHandler} deleteHandler={deleteHandler} key={item._id} item={item} />
                      ))
                    }
                  </Tbody>
                </Table>
              </TableContainer>

              <CourseModal
                id={courseId}
                isOpen={isOpen}
                onClose={onClose}
                courseTitle={courseTitle}
                deleteHandler={deleteLectureHandler}
                addLectureHandler={addLectureHandler}
                lectures={lectures && lectures.lectures}
                loading={loading}
              />
            </Box>
            <Sidebar />
          </Grid>
        )
      }
    </>
  )
}

export default AdminCourses

function Row({ item, courseDetailsHandler, deleteHandler, loading }) {

  return (
    <Tr boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} >#{item._id}</Td>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} >
        <Image boxSize={"16"} src={item.poster.url} />
      </Td>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} >{item.title}</Td>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} >{item.category}</Td>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} >{item.createdBy}</Td>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} isNumeric>{item.views}</Td>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} isNumeric>{item.lectures.length}</Td>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} isNumeric >
        <HStack justifyContent={"flex-end"}>
          <Button onClick={() => courseDetailsHandler(item._id, item.title)} variant={"outline"} color={"purple.500"} isLoading={loading}>
            View Lectures
          </Button>
          <Button isLoading={loading} color={"purple.600"} onClick={() => deleteHandler(item._id)}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}