import {server} from "../store.js";
import axios from 'axios';
import { courseRequest, courseRequestFail, courseRequestSuccess, getCourseLecturesFail, getCourseLecturesRequest, getCourseLecturesSuccess } from "../reducers/courseReducer.js";


export const getAllCourses = (category="",keyword="") => 
    async dispatch => {
        try{
            dispatch(courseRequest());
            
            const config = { headers: { "Content-Type": "application/json" } };

            const { data } = await axios.get(
              `${server}/courses?keyword=${keyword}&category=${category}`,
              {
                config,
                withCredentials:true
              }
            );

            dispatch(courseRequestSuccess(data));

        }catch(error){
            dispatch(courseRequestFail(error.response.data.message));
        }
};

export const getCourseLectures = id => async dispatch => {
  try{
    dispatch(getCourseLecturesRequest());

    const { data } = await axios.get(
      `${server}/course/${id}`,
      {
        withCredentials:true
      }
    );

    dispatch(getCourseLecturesSuccess({ lectures : data.lectures }));

}catch(error){
    dispatch(getCourseLecturesFail(error.response.data.message));
}
}