import {createSlice} from "@reduxjs/toolkit";
import api from "../../store/api.js";


const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            return action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            api.endpoints.getUserProfile.matchFulfilled,
            (state, {payload}) => {
                return payload
            }
        )

    }
})

export default userSlice.reducer
export const { setUser } = userSlice.actions