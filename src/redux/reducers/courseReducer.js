import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: 'course',
  initialState: {
    courses:[],
    lectures:[]
  },
  reducers: {
    courseRequest: (state) => {
      state.loading = true;
    },
    courseRequestSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    courseRequestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addToPlaylistRequest: (state) => {
      state.loading = true;
    },
    addToPlaylistSuccess: (state, action) => {
      state.loading = false;
      // state.courses = action.payload;
      state.message = action.payload;
    },
    addToPlaylistFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getCourseLecturesRequest: (state) => {
      state.loading = true;
    },
    getCourseLecturesSuccess: (state, action) => {
      state.loading = false;
      state.lectures = action.payload;
    },
    getCourseLecturesFail: (state, action) => {
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
  courseRequest,
  courseRequestSuccess,
  courseRequestFail,
  addToPlaylistRequest,
  addToPlaylistSuccess,
  addToPlaylistFail,
  getCourseLecturesRequest,
  getCourseLecturesSuccess,
  getCourseLecturesFail,
  clearError,
  clearMessage } = courseSlice.actions;

export const courseReducer = courseSlice.reducer;
