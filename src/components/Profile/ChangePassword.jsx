import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '../../redux/actions/ProfileAction';
import { clearProfileError, clearProfileMessage } from '../../redux/reducers/userReducer';
import { useNavigate } from "react-router-dom";
import Loader from '../../components/Layout/Loader/Loader.jsx';
import { getMyProfile } from '../../redux/actions/userAction';
import { toastDisplay } from './UpdateProfile';

const ChangePassword = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { message, error, loading } = useSelector(state => state.profile);

    const submitHandler = async(e) => {
        e.preventDefault();
        await dispatch(updatePassword(oldPassword, newPassword, confirmPassword));
    }


    useEffect(() => {
        if (error) {
            toast.error(error.toString() , toastDisplay);
            dispatch(clearProfileError());
        }

        if (message) {
            toast.success(message.message , toastDisplay);
            dispatch(getMyProfile());
            navigate("/profile");
            dispatch(clearProfileMessage());
        }

    }, [dispatch, error, message, navigate]);


    return (
        <Container py='16' minH={'90vh'}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <form onSubmit={submitHandler}>
                        <Heading textTransform={'uppercase'} children="Change Password" my='16' textAlign={['center', 'left']} />
                        <VStack spacing={'8'} >
                            <Input
                                required
                                id="password"
                                value={oldPassword}
                                onChange={e => setOldPassword(e.target.value)}
                                placeholder='old Password'
                                type={'password'}
                                focusBorderColor='yellow.500'
                            />
                            <Input
                                required
                                id="newpassword"
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                                placeholder='New Password'
                                type={'password'}
                                focusBorderColor='yellow.500'
                            />
                            <Input
                                required
                                id="confirmpassword"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                placeholder='Confirm Password'
                                type={'password'}
                                focusBorderColor='yellow.500'
                            />

                            <Button w="full" colorScheme={'yellow'} type="submit">
                                Change
                            </Button>

                        </VStack>
                    </form>
                </>
            )}
        </Container>
    )
}

export default ChangePassword