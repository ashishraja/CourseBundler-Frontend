import { Grid, Box, Heading, Table, TableContainer, TableCaption, Thead, Tr, Th, Tbody, Td, HStack, Button, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUsers, getSingleUserDetails, updateUserRole } from '../../../redux/actions/adminAction';
import Sidebar from '../Sidebar'
import { toast } from 'react-hot-toast';
import { clearError, clearMessage } from '../../../redux/reducers/adminReducer';
import UserModal from './UserModal';
import Loader from '../../Layout/Loader/Loader';

const Users = () => {

  const dispatch = useDispatch();
  const { users, loading , error, message } = useSelector(state => state.admin);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [role, setRole] = useState('');

  const updateHandler = async (userId) => {
    await dispatch(updateUserRole(userId));
  }

  const deleteHandler = async (userId) => {
    await dispatch(deleteUser(userId));
    dispatch(getAllUsers());
  }

  const getUserDetailsHandler = (userId, name, email, role, avatarUrl, createdAt) => {
    dispatch(getSingleUserDetails(userId));
    onOpen();
    setUserId(userId);
    setName(name);
    setEmail(email);
    setCreatedAt(createdAt);
    setAvatarUrl(avatarUrl);
    setRole(role);
  }

  useEffect(() => {
    if (error) {
      toast.error(error.toString());
      dispatch(clearError());
    }

    if (message && message.message) {
      toast.success(message.message);
      dispatch(clearMessage());
    }

    dispatch(getAllUsers());
  }, [dispatch, error, message])

  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <Grid
            minH={'100vh'} padding={"7vw 0 0 0"} templateColumns={["1fr", "5fr 1fr"]}
            css={{ cursor: 'url() , default' }}
          >
            <Box
              padding={["0", "8"]}
              overflow={"auto"}
            >
              <Heading
                textTransform={"uppercase"}
                children={"All Users"}
                p={["10vw 0 0 0", "0"]}
                my="16"
                textAlign={["center", "center"]}
              />
              <TableContainer border={"1px solid grey"}
                w={["100vw", "65vw", "55vw", "72vw"]} boxShadow={"-2px 0 15px rgba(107,70,193,.5)"}  >
                <Table variant={"simple"} size={"lg"} boxShadow={"-2px 0 15px rgba(107,70,193,.5)"} >
                  <TableCaption p={["0 0 5vw 0", "0 0 1vw 0"]} >All available users in the database</TableCaption>
                  <Thead boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>
                    <Tr boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} >
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>Id</Th>
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>Name</Th>
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>Email</Th>
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>Role</Th>
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>Subscription</Th>
                      <Th boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      users && users.users.map(item => (
                        <Row loading={loading} updateHandler={updateHandler} deleteHandler={deleteHandler} getUserDetailsHandler={getUserDetailsHandler} key={item._id} item={item} />
                      ))
                    }
                  </Tbody>
                </Table>
              </TableContainer>

              <UserModal
                id={userId}
                isOpen={isOpen}
                onClose={onClose}
                name={name}
                email={email}
                role={role}
                avatarUrl={avatarUrl}
                createdAt={createdAt}
              />
            </Box>

            <Sidebar />
          </Grid>
        )
      }
    </>
  )
}

export default Users

function Row({ item, updateHandler, deleteHandler, loading, getUserDetailsHandler }) {
  return (
    <Tr boxShadow={"-2px 0 5px rgba(107,70,193,.5)"}>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} >#{item._id}</Td>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} >{item.name}</Td>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} >{item.email}</Td>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} >{item.role}</Td>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} >{item.subscription && item.subscription.status === "active" ? "Active" : "Not Active"}</Td>
      <Td boxShadow={"-2px 0 5px rgba(107,70,193,.5)"} isNumeric >
        <HStack justifyContent={"flex-end"}>
          <Button isLoading={loading} onClick={() => getUserDetailsHandler(item._id, item.name, item.email, item.role, item.avatar.url, item.createdAt)} variant={"outline"} color={"purple.500"}>
            View Profile
          </Button>
          <Button isLoading={loading} onClick={() => updateHandler(item._id)} variant={"outline"} color={"purple.500"}>
            Change Role
          </Button>
          <Button isLoading={loading} color={"purple.600"} onClick={() => deleteHandler(item._id)}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}