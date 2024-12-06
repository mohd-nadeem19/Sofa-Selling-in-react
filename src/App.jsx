import { Route, Router, Routes } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
// import RegisterPage from "./Pages/RegisterPage"
import LoginRegisterPage from "./Pages/LoginRegisterPage"
import HomePage from "./Pages/HomePage"
import ShopPage from "./Pages/ShopPage"
import SinglePage from "./Pages/SinglePage"
import ContactPage from "./Pages/ContactPage"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/login" element={ <LoginPage /> }/>
        {/* <Route path="register" element={ <RegisterPage /> }/> */}
        <Route path="/loginRegister" element={ <LoginRegisterPage /> }/>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/shop" element={ <ShopPage /> }/>
        <Route path="/about" element={ <SinglePage /> }/>
        <Route path="/contact" element={ <ContactPage /> }/>
      </Routes>
    </div>
    )
}

export default App
