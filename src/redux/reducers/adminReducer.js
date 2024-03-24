import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'Admin',
    initialState: {},
    reducers: {
        createCourseRequest: (state) => {
            state.loading = true;
        },
        createCourseSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        createCourseFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        createRoomRequest: (state) => {
            state.loading = true;
        },
        createRoomSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        createRoomFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteCourseRequest: (state) => {
            state.loading = true;
        },
        deleteCourseSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteCourseFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addLecturesRequest: (state) => {
            state.loading = true;
        },
        addLecturesSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        addLecturesFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteLectureRequest: (state) => {
            state.loading = true;
        },
        deleteLectureSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteLectureFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getAdminStatsRequest: (state) => {
            state.loading = true;
        },
        getAdminStatsSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        getAdminStatsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getAllUsersRequest: (state) => {
            state.loading = true;
        },
        getAllUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        getAllUsersFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getSingleUserRequest: (state) => {
            state.loading = true;
        },
        getSingleUserSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        getSingleUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserRequest: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateUserRoleRequest: (state) => {
            state.loading = true;
        },
        updateUserRoleSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updateUserRoleFail: (state, action) => {
            state.loading = false;
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

export const {
    addLecturesRequest,
    addLecturesSuccess,
    addLecturesFail,
    deleteCourseRequest,
    deleteCourseSuccess,
    deleteCourseFail,
    getAdminStatsRequest,
    getAdminStatsSuccess,
    getAdminStatsFail,
    deleteLectureRequest,
    deleteLectureSuccess,
    deleteLectureFail,
    createCourseRequest,
    createCourseSuccess,
    createCourseFail,
    updateUserRoleRequest,
    updateUserRoleSuccess,
    updateUserRoleFail,
    getAllUsersRequest,
    getAllUsersSuccess,
    getAllUsersFail,
    getSingleUserRequest,
    getSingleUserSuccess,
    getSingleUserFail,
    deleteUserRequest,
    deleteUserSuccess,
    deleteUserFail,
    clearError,
    clearMessage } = adminSlice.actions;

export const adminReducer = adminSlice.reducer;
