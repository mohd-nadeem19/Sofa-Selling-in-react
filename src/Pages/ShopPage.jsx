import React from 'react'
import Navbar from '../Components/CartPageCom/Navbar'
import NavSection from '../Components/ShopPageCom/NavSection'
import Images from '../Components/SingleProduct/Images'
import HighQuality from '../Components/CartPageCom/HighQuality'
import Footer from '../Components/CartPageCom/Footer';

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