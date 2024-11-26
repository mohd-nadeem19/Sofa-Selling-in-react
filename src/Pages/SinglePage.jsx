import React from 'react'
import Navbar from '../Components/ContactPageCom/Navbar'
import Sofa from '../Components/SingleProduct/Sofa'
import AsgaardSofa from '../Components/SingleProduct/AsgaardSofa'
import Description from '../Components/SingleProduct/Description'
import Images from '../Components/SingleProduct/Images'
import Footer from '../Components/ContactPageCom/Footer'

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