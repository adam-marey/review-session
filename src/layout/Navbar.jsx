import React from 'react'
import { Link } from "react-router-dom";
import {logout, selectToken} from "../features/Auth/authSlice.js";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

// useSelector get us the data from the state
// useDispatch get us the action from the state

const Navbar = () => {
    const token = useSelector(selectToken)
    console.log(token)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        dispatch((logout()))
        navigate('/login')
    }



    return (
        <nav>
            <h1>Market Place</h1>

            <ul>
                <li>
                    <Link to='/posts'>Posts </Link>
                </li>
                {
                    token ? (
                        <>
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                            <li>
                                <a onClick={handleSubmit}>Logout</a>
                            </li>
                        </>
                    ) : (
                    <>
                        <li>
                            <Link to='/login'>Login </Link>
                        </li>

                    </>
                    )
                }

            </ul>
        </nav>
    )
}
export default Navbar
