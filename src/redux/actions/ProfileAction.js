import {server} from "../store";
import axios from 'axios';
import { cancelSubscriptionFail, cancelSubscriptionRequest, cancelSubscriptionSuccess, forgotPasswordFail, forgotPasswordRequest, forgotPasswordSuccess, removeFromPlaylistFail, removeFromPlaylistRequest, removeFromPlaylistSuccess, resetPasswordFail, resetPasswordRequest, resetPasswordSuccess, updateProfileFail, updateProfilePasswordFail, updateProfilePasswordRequest, updateProfilePasswordSuccess, updateProfilePictureFail, updateProfilePictureRequest, updateProfilePictureSuccess, updateProfileRequest, updateProfileSuccess } from "../reducers/userReducer";
import { addToPlaylistFail, addToPlaylistRequest, addToPlaylistSuccess } from "../reducers/courseReducer";

export const updateProfile = (name,email) => 
    async dispatch => {
        try{
            dispatch(updateProfileRequest());
            
            const config = { headers: { "Content-Type": "application/json" } };

            const { data } = await axios.put(
              `${server}/updateprofile`,
              { name , email },
              {
                config,
                withCredentials:true
              }
            );

            dispatch(updateProfileSuccess({ user: data.user, message: data.message }));
        }catch(error){
            dispatch(updateProfileFail(error.response.data.message));
        }
};

export const updatePassword = (oldPassword,newPassword,confirmPassword) => 
    async dispatch => {
        try{
            dispatch(updateProfilePasswordRequest());
            
            const config = { headers: { "Content-Type": "application/json" } };

            const { data } = await axios.put(
              `${server}/updatepassword`,
              { oldPassword,newPassword,confirmPassword },
              {
                config,
                withCredentials:true
              }
            );

            dispatch(updateProfilePasswordSuccess({ user: data.user, message: data.message }));

        }catch(error){
            dispatch(updateProfilePasswordFail(error.response.data.message));
        }
};

export const updateProfilePicture = (formdata) => 
    async dispatch => {
        try{
            dispatch(updateProfilePictureRequest());
            
            const config = { headers: { "Content-Type": "multipart/form-data" } };

            const { data } = await axios.put(
              `${server}/updateprofilepicture`,
              formdata,
              {
                config,
                withCredentials:true
              }
            );

            dispatch(updateProfilePictureSuccess({ user: data.user, message: data.message }));

        }catch(error){
            dispatch(updateProfilePictureFail(error.response.data.message));
        }
};

export const forgotPassword = (email) => 
    async dispatch => {
        try{
            dispatch(forgotPasswordRequest());
            
            const config = { headers: { "Content-Type": "application/json" } };

            const { data } = await axios.post(
              `${server}/forgotpassword`,
              {email},
              {
                config,
                withCredentials:true
              }
            );

            dispatch(forgotPasswordSuccess({ user: data.user, message: data.message }));

        }catch(error){
            dispatch(forgotPasswordFail(error.response.data.message));
        }
};

export const resetPassword = (token,password) => 
    async dispatch => {
        try{
            dispatch(resetPasswordRequest());
            
            const config = { headers: { "Content-Type": "application/json" } };

            const { data } = await axios.put(
              `${server}/resetpassword/${token}`,
              {token,password},
              {
                config,
                withCredentials:true
              }
            );

            dispatch(resetPasswordSuccess({ user: data.user, message: data.message }));

        }catch(error){
            dispatch(resetPasswordFail(error.response.data.message));
        }
};


export const addToPlaylist = (id) => 
    async dispatch => {
        try{
            dispatch(addToPlaylistRequest());

            const config = { headers: { "Content-Type": "application/json" } };

            const { data } = await axios.post(
              `${server}/addtoplaylist`,
              {id},
              {
                config,
                withCredentials:true
              }
            );

            dispatch(addToPlaylistSuccess({ message: data.message }));

        }catch(error){
            dispatch(addToPlaylistFail(error.response.data.message));
        }
};

export const removeFromPlaylist = (id) => 
    async dispatch => {
        try{
            dispatch(removeFromPlaylistRequest());

            const { data } = await axios.delete(
              `${server}/removefromplaylist?id=${id}`,
              {
                withCredentials:true
              }
            );

            dispatch(removeFromPlaylistSuccess({ message: data.message }));

        }catch(error){
            dispatch(removeFromPlaylistFail(error.response.data.message));
        }
};

export const cancelSubscription = () => async (dispatch) => {
  try {
    dispatch(cancelSubscriptionRequest());

    const { data } = await axios.delete(
      `${server}/subscribe/cancel`,
      {
        withCredentials:true
      }
    );

    dispatch(cancelSubscriptionSuccess({ message: data.message }));
  } catch (error) {
    dispatch(cancelSubscriptionFail(error.response.data.message));
  }
};

