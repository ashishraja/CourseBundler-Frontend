import { Button, Text, Image, Heading, Stack, Avatar, Container, HStack, VStack, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Input, ModalFooter, useDisclosure, ModalHeader } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { cancelSubscription, removeFromPlaylist, updateProfilePicture } from '../../redux/actions/ProfileAction';
import { getMyProfile } from '../../redux/actions/userAction';
import { clearProfileError, clearProfileMessage, clearSubscriptionError, clearSubscriptionMessage } from '../../redux/reducers/userReducer';
import Loader from '../Layout/Loader/Loader';
import { toastDisplay } from './UpdateProfile';


export const fileUploadCss = {
    cursor: "pointer",
    border: "none",
    color: '#ecc948',
    marginLeft: '-5%',
    width: '110%',
    height: '100%',
    backgroundColor: "white"
}

const Profile = ({ user }) => {

    const dispatch = useDispatch();
    const {loading, error, message } = useSelector(state => state.profile);
    const {loading:subscriptionLoading , error:subscriptionError , message:subscriptionMessage} = useSelector(state=>state.subscription);
    const { onClose, isOpen, onOpen } = useDisclosure();
    const navigate = useNavigate();

    const removeFromPlaylistHandler = async (id) => {
        await dispatch(removeFromPlaylist(id));
    }

    const changeImageSubmitHandler = async (e, image) => {
        e.preventDefault();
        if (!image) {
            toast.error('No file selected' , toastDisplay);
            return;
        }

        const myForm = new FormData();
        myForm.append("file", image);
        await dispatch(updateProfilePicture(myForm));
        await  navigate("/profile");
        onClose();
    }

    const cancelSubscriptionHandler = async () => {
        await dispatch(cancelSubscription());      
      }

    useEffect(() => {
        if (error) {
          toast.error(error.toString() , toastDisplay);
          dispatch(clearProfileError());
        }
      
        if (message) {
          toast.success(message.message , toastDisplay);
          dispatch(getMyProfile());
          dispatch(clearProfileMessage());
        }
      
        if (subscriptionError) {
          toast.error(subscriptionError.toString() , toastDisplay);
          dispatch(clearSubscriptionError());
        }
      
        if (subscriptionMessage) {
          toast.success(subscriptionMessage.message , toastDisplay);
          dispatch(getMyProfile());
          navigate("/profile");
          dispatch(clearSubscriptionMessage());
        }
      
      }, [dispatch, error, message ,subscriptionError , subscriptionMessage , navigate]);

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <Container minH={"95vh"} maxW={"container.lg"} py="8">
                        <Heading children="Profile" textAlign={["center", "left"]} textTransform="uppercase" m={["22vw 0vw 0vw 0vw", "10vw 0vw 1vw 0vw"]} />
                        <Stack
                            justifyContent={"flex-start"}
                            direction={["column", "row"]}
                            alignItems={["center"]}
                            spacing={["8", "16"]}
                            padding="8"
                        >
                            <VStack>
                                <Avatar boxSize={"48"} src={user.avatar.url} />
                                <Button isLoading={loading} onClick={onOpen} colorScheme={'yellow'} variant={'ghost'} >
                                    Change Photo
                                </Button>
                            </VStack>

                            <VStack spacing={"4"} alignItems={["center", "flex-start"]}>
                                <HStack>
                                    <Text children="Name" fontWeight={'bold'} />
                                    <Text children={user.name} />
                                </HStack>
                                <HStack>
                                    <Text children="Email" fontWeight={'bold'} />
                                    <Text children={user.email} />
                                </HStack>
                                <HStack>
                                    <Text children="CreatedAt" fontWeight={'bold'} />
                                    <Text children={user.createdAt.split('T')[0]} />
                                </HStack>
                                {user.role !== 'Admin' && (
                                    <HStack>
                                        <Text children="Subscription" fontWeight={'bold'} />
                                        {user.subscription && user.subscription.status === "active" ? (
                                            <Button isLoading={subscriptionLoading} onClick={cancelSubscriptionHandler} color={'yellow.500'} variant={'unstyled'} >Cancel Subscription</Button>
                                        ) : (
                                            <Link to="/subscribe">
                                                <Button type="button" colorScheme={"yellow"}>
                                                    Subscribe
                                                </Button>
                                            </Link>
                                        )}
                                    </HStack>
                                )}

                                <Stack
                                    direction={["column", "row"]}
                                    alignItems={["center"]}
                                >
                                    <Link to="/updateprofile">
                                        <Button type="button" >Update Profile</Button>
                                    </Link>
                                    <Link to="/changepassword">
                                        <Button type="button" >Change Password</Button>
                                    </Link>
                                </Stack>

                            </VStack>
                        </Stack>

                        <Heading textTransform={"uppercase"} textAlign={["center", "left"]} children="Playlist" my="8" />
                        {user.playlist.length > 0 && (
                            <Stack
                                direction={["column", "row"]}
                                alignItems={["center"]}
                                flexWrap="wrap"
                                p="4"
                            >
                                {
                                    user.playlist.map((element, index) => (
                                        <VStack w="48" m={"2"} key={element.course}>
                                            <Image boxSize={"48"} src={element.poster} objectFit={"cover"} />

                                            <HStack p="4">
                                                <Link to={`/course/${element.course}`}>
                                                    <Button type="button" variant={'ghost'} colorScheme='yellow'>
                                                        Watch Now
                                                    </Button>
                                                </Link>

                                                <Button isLoading={loading} onClick={() => removeFromPlaylistHandler(element.course)}>
                                                    <RiDeleteBin7Fill />
                                                </Button>
                                            </HStack>
                                        </VStack>
                                    ))
                                }
                            </Stack>
                        )}

                        <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose} loading={loading} />
                    </Container>
                )
            }
        </>
    );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler, loading }) {
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    const changeImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePrev(reader.result);
                setImage(file);
            };

            reader.readAsDataURL(file);
        }
    };

    const closeHandler = () => {
        onClose();
        setImagePrev('');
        setImage('');
    };

    return (
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={'blur(10px)'} />
            <ModalContent>
                <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container>
                        <form onSubmit={(e) => changeImageSubmitHandler(e, image)} spacing={'8'}>
                            <VStack>
                                {imagePrev && <Avatar boxSize={'48'} src={imagePrev} />}
                                <Input
                                    type={'file'}
                                    css={{ '&::file-selector-button': fileUploadCss }}
                                    onChange={changeImage}
                                    w={['60vw', '20vw']}
                                />

                                <Button isLoading={loading} w={['60vw', '20vw']} colorScheme={'yellow'} type="submit">
                                    Change
                                </Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button mr={'3'} onClick={closeHandler}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};


