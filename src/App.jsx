import { Route, Router, Routes } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
// import RegisterPage from "./Pages/RegisterPage"
import LoginRegisterPage from "./Pages/LoginRegisterPage"
import HomePage from "./Pages/HomePage"
import ShopPage from "./Pages/ShopPage"
import SinglePage from "./Pages/SinglePage"
import ContactPage from "./Pages/ContactPage"
import ShopingPage from "./Pages/ShopingPage"

function App() {

  const isToken = localStorage.getItem("Token");

  return (
    <div>
      <Routes>
        <Route path="/login" element={ <LoginPage /> }/>
        {/* <Route path="register" element={ <RegisterPage /> }/> */}
        <Route path="/loginRegister" element={ <LoginRegisterPage /> }/>
        <Route path="/" element={isToken ? <HomePage/> : <LoginPage /> }/>
        <Route path="/shop" element={ <ShopPage /> }/>
        <Route path="/contact" element={ <ContactPage /> }/>
        <Route path="/shoping" element={ <ShopingPage /> }/>
        <Route path="/:id" element={ <SinglePage /> }/>
      </Routes>
    </div>
    )
}

export default App
