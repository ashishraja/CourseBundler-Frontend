import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./reducers/adminReducer";
import { courseReducer } from "./reducers/courseReducer";
import { profileReducer, subscriptionReducer, userReducer } from "./reducers/userReducer";
import {thunk} from "redux-thunk";
const middleware = [thunk];

const store = configureStore({
    reducer: 
        {
            admin: adminReducer,
            profile: profileReducer,
            user: userReducer,
            subscription: subscriptionReducer,
            course: courseReducer,
        },
        middleware,
        devTools:false
});

export default store;

export const server = 'https://coursebundler-n3fx.onrender.com/api/v1';
