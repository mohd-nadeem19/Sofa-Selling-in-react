import React from 'react'
import Navbar from '../Components/ContactPageCom/Navbar'
import Contact from '../Components/ContactPageCom/Contact'
import GetInTouch from '../Components/ContactPageCom/GetInTouch'
import HighQuality from '../Components/ContactPageCom/HighQuality'
import Footer from '../Components/ContactPageCom/Footer'

const ContactPage = () => {
  return (
    <div>
        <Navbar />
        <Contact />
        <GetInTouch />
        <HighQuality />
        <Footer />

        
    </div>
  )
}

export default ContactPage