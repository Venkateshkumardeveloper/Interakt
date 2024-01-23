import React from 'react'
// import Nav from './Navbar/Nav'
// import Marketing from './Marketing/Marketing'
// import Contact from './Contact/Contact'
// import Banner from './Banner/Banner'
// import Whatsappapifeatures from './APIFeatures/Whatsappapifeatures'
// import Userdetails from './Userdetails/Userdetails'


import Nav from '../Components/Navbar/Nav'
import Marketing from '../Components/Marketing/Marketing'
import Contact from '../Components/Contact/Contact'
import Banner from '../Components/Banner/Banner'
import Userdetails from '../Components/Userdetails/Userdetails'
import Whatsappapifeatures from '../Components/APIFeatures/Whatsappapifeatures'
const MainHome = () => {
  return (
    <div >
      <Userdetails/>
    
        <Nav/>
        <Banner />
        <Marketing />
        <Whatsappapifeatures/>
        <Contact />
       
      
    </div>
  )
}

export default MainHome