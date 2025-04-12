import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import ContactPage from '../components/ContactUs/ContactPage'
import Navbar from '../components/Navbar/navbar'
import AboutPage from '../components/AboutUs/AboutPage'
import Login from '../pages/LoginPage/Login'
import Register from '../pages/RegisterPage/Register'
import UploadFingerprint from '../pages/Upload/UploadFingerprint'

const Router = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/Services' element={<Home/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/upload' element={<UploadFingerprint/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default Router
