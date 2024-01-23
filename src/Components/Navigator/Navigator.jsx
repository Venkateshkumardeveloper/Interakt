import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home'
import Nav from '../Navbar/Nav'
import Marketing from '../Marketing/Marketing'
import Contact from '../Contact/Contact'
import Banner from '../Banner/Banner'
import Whatsappapifeatures from '../APIFeatures/Whatsappapifeatures' 
import About from '../About/About'
import Userdetails from '../Userdetails/Userdetails'
import MainHome from '../../MainHome/MainHome'

const Navigator = () => {
  return (
    <>

  
   
   <Nav/>
        <Routes>
        
          <Route path='/home' element={<Home/>} />
            <Route path='/user' element={<Userdetails/>}/>
           
            <Route path='/nav' element={<Nav/>} />
            <Route path='/market' element={<Marketing/> }  />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/banner' element={<Banner/>} />
            <Route path='/api' element={<Whatsappapifeatures/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/' element={<MainHome/>} />

            
            
        </Routes>
        
  
    </>
  
  )
}

export default Navigator