import React from 'react'
import Navbar from '../Components/CartPageCom/Navbar'
import Hero from '../Components/HomePageCom/Hero'
import BrowserTheRange from '../Components/HomePageCom/BrowserTheRange'
import OurProducts from '../Components/HomePageCom/OurProducts'
import BeautifulRooms from '../Components/HomePageCom/BeautifulRooms'
import Furniture from '../Components/HomePageCom/Furniture'
import Footer from '../Components/CartPageCom/Footer'

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