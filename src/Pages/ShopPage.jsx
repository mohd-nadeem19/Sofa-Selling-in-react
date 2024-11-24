import React from 'react'
import Navbar from '../Components/SingleProduct/Navbar'
import NavSection from '../Components/ShopPageCom/NavSection'
import Images from '../Components/ShopPageCom/Images'
import HighQuality from '../Components/ShopPageCom/HighQuality'
import Footer from '../Components/ShopPageCom/Footer'

const ShopPage = () => {
  return (
    <div>
      <Navbar />
      <NavSection />
      <Images />
      <HighQuality />


      <Footer />
    </div>
  )
}

export default ShopPage