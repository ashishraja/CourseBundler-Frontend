import axios from 'axios';
import { buySubscriptionFail, buySubscriptionRequest, buySubscriptionSuccess, getStatsFail, getStatsRequest, getStatsSuccess, loadUserFail , loadUserRequest , loadUserSuccess , loginFail, loginRequest, loginSuccess, logoutFail, logoutRequest, logoutSuccess, registerFail, registerRequest, registerSuccess } from '../reducers/userReducer.js';
import { server } from "../store.js";


export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        config,
        mode:"cors",
        credentials:"include",
        withCredentials:true
      }
    );

    dispatch(loginSuccess({ user: data.user, message: data.message }));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};

export const getMyProfile = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.get(
      `${server}/profile`,
      {
        config,
        withCredentials:true
      }
    );

    dispatch(loadUserSuccess({ user: data.user }));
  } catch (error) {
    dispatch(loadUserFail(error.response.data.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, 
    };

    const { data } = await axios.get(
      `${server}/logout`,
      config
    );

    dispatch(logoutSuccess({ user: data.user, message: data.message }));
  } catch (error) {
    dispatch(logoutFail(error.response.data.message));
  }
};



export const register = (formdata) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/register`,
      formdata,
      {
        config,
        mode:"cors",
        credentials:"include",
        withCredentials:true
      }
    );

    dispatch(registerSuccess({ user: data.user, message: data.message }));
  } catch (error) {
    dispatch(registerFail(error.response.data.message));
  }
};

export const buySubscription = () => async (dispatch) => {
  try {
    dispatch(buySubscriptionRequest());

    const { data } = await axios.get(
      `${server}/subscription`,
      {
        withCredentials:true
      }
    );

    dispatch(buySubscriptionSuccess({ subscriptionId: data.subscriptionId , message: data.message }));
  } catch (error) {
    dispatch(buySubscriptionFail(error.response.data.message));
  }
};

export const getStats = () => 
    async dispatch => {
        try{
            dispatch(getStatsRequest());
            
            const config = { headers: { "Content-Type": "application/json" } };
            
            const { data } = await axios.get(
              `${server}/getstats`,
              {
                config,
                withCredentials:true
              }
            );
              
            dispatch(getStatsSuccess( data ));

        }catch(error){
            dispatch(getStatsFail(error.response.data.message));
        }
};