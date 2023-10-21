import {configureStore} from "@reduxjs/toolkit";
import api from "./api.js";
import authReducer from '../features/Auth/authSlice.js'
import userReducer from '../features/Account/profileSlice.js'
import postReducer from '../features/Posts/postSlice.js'

// the store is the main hub for all of out data
// and it going to be the container of all our reducers, AND middleware

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer,
        user: userReducer,
        post: postReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

 export default store;
