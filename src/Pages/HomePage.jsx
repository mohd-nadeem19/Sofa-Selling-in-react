import React from 'react'
import Navbar from '../Components/ContactPageCom/Navbar'
import Hero from '../Components/HomePageCom/Hero'
import BrowserTheRange from '../Components/HomePageCom/BrowserTheRange'
import OurProducts from '../Components/HomePageCom/OurProducts'
import BeautifulRooms from '../Components/HomePageCom/BeautifulRooms'
import Furniture from '../Components/HomePageCom/Furniture'
import Footer from '../Components/ContactPageCom/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BrowserTheRange />
      <OurProducts />
      <BeautifulRooms />
      <Furniture />
      <Footer />
    </div>
  )
}

export default HomePage