import React from 'react'
import {useGetUserProfileQuery} from "../Auth/authSlice.js";
import {useSelector} from "react-redux";
import {selectToken} from "../Auth/authSlice.js";

const Profile = () => {
    const {data, isLoading, isError } = useGetUserProfileQuery()
    console.log(data)

    const token = useSelector(selectToken)
    console.log(token)

    if (isLoading) return <div>Loading .....</div>
    if (isError) return <div>Something went wrong .... </div>





    return (
        <div>

            <h1>Welcome, {data.data.username}!!!</h1>
            <h2>User's Data: </h2>
            <p>UserID: {data.data._id}</p>
            <p>Username: {data.data.username}</p>
            {
                data.data.posts.length === 0 ?
                    <p>You don't have any posts</p>
                    : data.data.posts.map(post =>
                        <div key={post._id}>
                            <h3>{post.title}</h3>
                        </div>
                    )
            }
        </div>
    )
}
export default Profile
