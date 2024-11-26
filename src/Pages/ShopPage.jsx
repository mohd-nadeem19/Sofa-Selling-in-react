import React from 'react'
import Navbar from '../Components/ContactPageCom/Navbar'
import NavSection from '../Components/ShopPageCom/NavSection'
import Images from '../Components/SingleProduct/Images'
import HighQuality from '../Components/ContactPageCom/HighQuality'
import Footer from '../Components/ContactPageCom/Footer';

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