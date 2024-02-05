import { Container, Heading, Input, VStack, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../redux/actions/ProfileAction';
import { getMyProfile } from '../../redux/actions/userAction';
import { clearProfileError, clearProfileMessage } from '../../redux/reducers/userReducer';

import Loader from '../Layout/Loader/Loader';

const UpdateProfile = ({ user }) => {

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const { loading } = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { message, error } = useSelector(state => state.profile);

    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(updateProfile(name, email));
        await dispatch(getMyProfile());
        await  navigate("/profile");
        await dispatch(clearProfileMessage());
    }

    useEffect(() => {
        if (error) {
            toast.error(error.toString());
            dispatch(clearProfileError());
        }
        if (message) {
            toast.success(message.message);
        }
    }, [dispatch, message, error]);

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <Container py='16' minH={'90vh'}>
                        <form onSubmit={submitHandler}>
                            <Heading textTransform={'uppercase'} children="Update Profile" my='16' textAlign={['center', 'left']} />
                            <VStack spacing={'8'} >
                                <Input
                                    required
                                    id="password"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder='Name'
                                    type={'text'}
                                    focusBorderColor='yellow.500'
                                />

                                <Input
                                    required
                                    id="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder='Email'
                                    type={'email'}
                                    focusBorderColor='yellow.500'
                                />


                                <Button isLoading={loading} w="full" colorScheme={'yellow'} type="submit">
                                    Update
                                </Button>

                            </VStack>
                        </form>
                    </Container>
                )
            }
        </>
    )
}

export default UpdateProfile