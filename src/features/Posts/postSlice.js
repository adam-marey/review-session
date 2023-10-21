import api from "../../store/api.js";
import { createSlice } from "@reduxjs/toolkit";

const postsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        fetchPosts: builder.query({
            query: () => `/posts`,
        }),
        addPost: builder.mutation({
            query: ({title, description, price, location, willDeliver}) => ({
                url: `/posts`,
                method: 'POST',
                body: {post: {title, description, price, location, willDeliver}},
            }),
        }),
    }),

})

const postsSlice = createSlice({
        name: 'posts',
        initialState: {
            posts: [],
        },
        reducers: {
            setPosts: (state, action) => {
                return action.payload;

            }
        }
    }
)

export default postsSlice.reducer;
export const { setPosts } = postsSlice.actions;

export const { useFetchPostsQuery, useAddPostMutation, useDeletePostMutation } = postsApi;