import React from 'react'
import Nav from './Navbar/Nav'
import Marketing from './Marketing/Marketing'
import Contact from './Contact/Contact'
import Banner from './Banner/Banner'
import Whatsappapifeatures from './APIFeatures/Whatsappapifeatures'

const Home = () => {
  return (
    <div >
    
    
        <Nav/>
        <Banner />
        <Marketing />
        <Whatsappapifeatures/>
        <Contact />
       
      
    </div>
  )
}

export default Home