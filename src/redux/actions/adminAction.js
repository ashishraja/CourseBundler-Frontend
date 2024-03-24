import axios from "axios";
import { addLecturesFail, addLecturesRequest, addLecturesSuccess, createCourseFail, createCourseRequest, createCourseSuccess, deleteCourseFail, deleteCourseRequest, deleteCourseSuccess, deleteLectureFail, deleteLectureRequest, deleteLectureSuccess, deleteUserFail, deleteUserRequest, deleteUserSuccess, getAdminStatsFail, getAdminStatsRequest, getAdminStatsSuccess, getAllUsersFail, getAllUsersRequest, getAllUsersSuccess , getSingleUserFail, getSingleUserRequest, getSingleUserSuccess, updateUserRoleFail, updateUserRoleRequest, updateUserRoleSuccess, createRoomRequest, createRoomSuccess, createRoomFail } from "../reducers/adminReducer";
import { server } from "../store";

export const createCourse = (formData) => 
    async dispatch => {
        try{
            dispatch(createCourseRequest());
            
            const config = { headers: { "Content-Type": "multipart/form-data" } };

            const { data } = await axios.post(
              `${server}/createcourse`,
              formData,
              {
                config,
                withCredentials:true
              }
            );

            dispatch(createCourseSuccess({ message: data.message }));

        }catch(error){
            dispatch(createCourseFail(error.response.data.message));
        }
};
export const createRoom = (formData) => 
    async dispatch => {
      
};

export const deleteCourse = (id) => 
    async dispatch => {
        try{
            dispatch(deleteCourseRequest());

            const { data } = await axios.delete(
              `${server}/course/${id}`,
              {
                withCredentials:true
              }
            );

            dispatch(deleteCourseSuccess({ message: data.message }));

        }catch(error){
            dispatch(deleteCourseFail(error.response.data.message));
        }
};

export const addLectures = (courseId,formData) => 
    async dispatch => {
        try{
            dispatch(addLecturesRequest());

            const config = { headers: { "Content-Type": "multipart/form-data" } };
            
            const { data } = await axios.post(
              `${server}/course/${courseId}`,
              formData,
              {
                config,
                withCredentials:true
              }
            );

            dispatch(addLecturesSuccess({message: data.message }));

        }catch(error){
            dispatch(addLecturesFail(error.response.data.message));
        }
};

export const deleteLectures = (courseId,lectureId) => 
    async dispatch => {
        try{
            dispatch(deleteLectureRequest());
            
            const { data } = await axios.delete(
              `${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,
              {
                withCredentials:true
              }
            );

            dispatch(deleteLectureSuccess({message: data.message }));

        }catch(error){
            dispatch(deleteLectureFail(error.response.data.message));
        }
};

export const deleteUser = (id) => 
    async dispatch => {
        try{
            dispatch(deleteUserRequest());

            const { data } = await axios.delete(
              `${server}/admin/user/${id}`,
              {
                withCredentials:true
              }
            );

            dispatch(deleteUserSuccess({ message: data.message }));

        }catch(error){
            dispatch(deleteUserFail(error.response.data.message));
        }
};

export const getAllUsers = () => 
    async dispatch => {
        try{
            dispatch(getAllUsersRequest());
            const config = { headers: { "Content-Type": "application/json" } };
            const { data } = await axios.get(
              `${server}/admin/users`,
              {
                config,
                withCredentials:true
              }
            );

            dispatch(getAllUsersSuccess({ users:data.users }));

        }catch(error){
            dispatch(getAllUsersFail(error.response.data.message));
        }
};

export const getSingleUserDetails = (id) => 
    async dispatch => {
        try{
            dispatch(getSingleUserRequest());
            const config = { headers: { "Content-Type": "application/json" } };
            const { data } = await axios.get(
              `${server}/admin/user/${id}`,
              {
                config,
                withCredentials:true
              }
            );

            dispatch(getSingleUserSuccess({ user:data.user }));

        }catch(error){
            dispatch(getSingleUserFail(error.response.data.message));
        }
};

export const updateUserRole = (id) => 
    async dispatch => {
        try{
            dispatch(updateUserRoleRequest());
            
            const { data } = await axios.put(
              `${server}/admin/user/${id}`,
              {},
              {
                withCredentials:true
              }
            );

            dispatch(updateUserRoleSuccess({ message: data.message }));

        }catch(error){
            dispatch(updateUserRoleFail(error.response.data.message));
        }
};

export const getDashboardStats = () => 
    async dispatch => {
        try{
            dispatch(getAdminStatsRequest());
            
            const config = { headers: { "Content-Type": "application/json" } };
            
            const { data } = await axios.get(
              `${server}/admin/stats`,
              {
                config,
                withCredentials:true
              }
            );
              
            dispatch(getAdminStatsSuccess( data ));

        }catch(error){
            dispatch(getAdminStatsFail(error.response.data.message));
        }
};




