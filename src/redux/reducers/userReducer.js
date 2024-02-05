import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        isAuthenticated: false,
        user: null,
        message: null,
        error: null,
    },
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload;
            state.error = null;
        },
        loginFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        loadUserRequest: (state) => {
            state.loading = true;
        },
        loadUserSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        loadUserFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        logoutRequest: (state) => {
            state.loading = true;
        },
        logoutSuccess: (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
        },
        logoutFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        },
        registerRequest: (state) => {
            state.loading = true;
        },
        registerSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
            state.error = null;
        },
        registerFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        },
    },
});


const profileSlice = createSlice({
    name: "profile",
    initialState: {},
    reducers: {
        updateProfileRequest: state => {
            return {
                ...state,
                loading: true,
            }
        },
        updateProfileSuccess: (state, action) => {
            return {
                ...state,
                loading: false,
                message: action.payload,
            }
        },
        updateProfileFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        updateProfilePasswordRequest: state => {
            state.loading = true;
        },
        updateProfilePasswordSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updateProfilePasswordFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        updateProfilePictureRequest: state => {
            state.loading = true;
        },
        updateProfilePictureSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updateProfilePictureFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        forgotPasswordRequest: state => {
            state.loading = true;
        },
        forgotPasswordSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        forgotPasswordFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        resetPasswordRequest: state => {
            state.loading = true;
        },
        resetPasswordSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        resetPasswordFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        removeFromPlaylistRequest: (state) => {
            state.loading = true;
        },
        removeFromPlaylistSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        removeFromPlaylistFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getStatsRequest: (state) => {
            state.loading = true;
        },
        getStatsSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        getStatsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearProfileError: (state) => {
            state.error = null;
        },
        clearProfileMessage: (state) => {
            state.message = null;
        },

    }
});


const subscriptionSlice = createSlice({
    name: "subscription",
    initialState: {},
    reducers: {
        buySubscriptionRequest: state => {
            state.loading = true;
        },
        buySubscriptionSuccess: (state,action) => {
            state.loading = false;
            state.subscriptionId = action.payload;
        },
        buySubscriptionFail: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
        cancelSubscriptionRequest: state => {
            state.loading = true;
        },
        cancelSubscriptionSuccess: (state,action) => {
            state.loading = false;
            state.message = action.payload;
        },
        cancelSubscriptionFail: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearSubscriptionError: (state) => {
            state.error = null;
        },
        clearSubscriptionMessage: (state) => {
            state.message = null;
        },

    }
});


export const {
    loginRequest,
    loginSuccess,
    loginFail,
    registerRequest,
    registerSuccess,
    registerFail,
    loadUserFail,
    loadUserSuccess,
    loadUserRequest,
    logoutFail,
    logoutRequest,
    logoutSuccess,
    clearError,
    clearMessage,
} = userSlice.actions;

export const {
    updateProfileFail,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfilePictureFail,
    updateProfilePictureRequest,
    updateProfilePictureSuccess,
    updateProfilePasswordRequest,
    updateProfilePasswordSuccess,
    updateProfilePasswordFail,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    forgotPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess,
    removeFromPlaylistRequest,
    removeFromPlaylistSuccess,
    removeFromPlaylistFail,
    resetPasswordFail,
    getStatsRequest,
    getStatsSuccess,
    getStatsFail,
    clearProfileMessage,
    clearProfileError
} = profileSlice.actions;

export const {
    buySubscriptionRequest,
    buySubscriptionSuccess,
    buySubscriptionFail,
    cancelSubscriptionRequest,
    cancelSubscriptionSuccess,
    cancelSubscriptionFail,
    clearSubscriptionError,
    clearSubscriptionMessage
} =subscriptionSlice.actions;

export const subscriptionReducer = subscriptionSlice.reducer;
export const userReducer = userSlice.reducer;
export const profileReducer = profileSlice.reducer;

