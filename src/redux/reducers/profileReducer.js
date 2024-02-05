// import { createSlice } from "@reduxjs/toolkit";

// const profileSlice = createSlice({
//     name: "profile",
//     initialState: {
//         loading:false,
//         message:null,
//     },
//     reducers: {
//         updateProfileRequest: state => {
//             return {
//                 ...state,
//                 loading: true,
//             }
//         },
//         updateProfileSuccess: (state, action) => {
//             return {
//                 ...state,
//                 loading: false,
//                 message: action.payload,
//             }
//         },
//         updateProfileFail: (state, action) => {
//             state.loading = false;
//             state.error = action.payload
//         },
//         updateProfilePasswordRequest: state => {
//             state.loading = true;
//         },
//         updateProfilePasswordSuccess: (state, action) => {
//             state.loading = false;
//             state.message = action.payload;
//         },
//         updateProfilePasswordFail: (state, action) => {
//             state.loading = false;
//             state.error = action.payload
//         },
//         updateProfilePictureRequest: state => {
//             state.loading = true;
//         },
//         updateProfilePictureSuccess: (state, action) => {
//             state.loading = false;
//             state.message = action.payload;
//         },
//         updateProfilePictureFail: (state, action) => {
//             state.loading = false;
//             state.error = action.payload
//         },
//         forgotPasswordRequest: state => {
//             state.loading = true;
//         },
//         forgotPasswordSuccess: (state, action) => {
//             state.loading = false;
//             state.message = action.payload;
//         },
//         forgotPasswordFail: (state, action) => {
//             state.loading = false;
//             state.error = action.payload
//         },
//         resetPasswordRequest: state => {
//             state.loading = true;
//         },
//         resetPasswordSuccess: (state, action) => {
//             state.loading = false;
//             state.message = action.payload;
//         },
//         resetPasswordFail: (state, action) => {
//             state.loading = false;
//             state.error = action.payload
//         },
//         removeFromPlaylistRequest: (state) => {
//             state.loading = true;
//         },
//         removeFromPlaylistSuccess: (state, action) => {
//             state.loading = false;
//             state.message = action.payload;
//         },
//         removeFromPlaylistFail: (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         clearError: (state) => {
//             state.error = null;
//         },
//         clearMessage: (state) => {
//             state.message = null;
//         },
//     }
// });


// export const {
//     updateProfileFail,
//     updateProfileRequest,
//     updateProfileSuccess,
//     updateProfilePictureFail,
//     updateProfilePictureRequest,
//     updateProfilePictureSuccess,
//     updateProfilePasswordRequest,
//     updateProfilePasswordSuccess,
//     updateProfilePasswordFail,
//     forgotPasswordRequest,
//     forgotPasswordSuccess,
//     forgotPasswordFail,
//     resetPasswordRequest,
//     resetPasswordSuccess,
//     removeFromPlaylistRequest,
//     removeFromPlaylistSuccess,
//     removeFromPlaylistFail,
//     resetPasswordFail
// } = profileSlice.actions;

// export const profileReducer = profileSlice.reducer;


