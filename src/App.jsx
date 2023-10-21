// import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import Posts from "./features/Posts/Posts.jsx";
import Login from "./features/Auth/Login.jsx";
import Navbar from "./layout/Navbar.jsx";
import Profile from "./features/Account/Profile.jsx";
function App() {


  return (
    <>
        <Navbar />

        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    </>
  )
}

export default App
