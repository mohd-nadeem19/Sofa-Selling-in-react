import React from 'react'
import Navbar from '../Components/CartPageCom/Navbar'
import Contact from '../Components/CartPageCom/Contact'
import CartTotal from '../Components/CartPageCom/CartTotal'
import HighQuality from '../Components/CartPageCom/HighQuality'
import Footer from '../Components/CartPageCom/Footer'

const CartPage = () => {
  return (
    <div>
        <Navbar />
        <Contact />
        <CartTotal />
        <HighQuality />
        <Footer />
    </div>
  )
}

export default CartPage