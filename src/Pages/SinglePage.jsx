import React from 'react'
import Navbar from '../Components/CartPageCom/Navbar'
import Sofa from '../Components/SingleProduct/Sofa'
import AsgaardSofa from '../Components/SingleProduct/AsgaardSofa'
import Description from '../Components/SingleProduct/Description'
import Images from '../Components/SingleProduct/Images'
import Footer from '../Components/CartPageCom/Footer'

const SinglePage = () => {
  return (
    <div>
        <Navbar />
        <Sofa />
        <AsgaardSofa />
        <Description />
        <Images />
        <Footer />
    </div>
  )
}

export default SinglePage