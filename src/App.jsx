import { Route, Router, Routes } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import LoginRegisterPage from "./Pages/LoginRegisterPage"
import HomePage from "./Pages/HomePage"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/login" element={ <LoginPage /> }/>
        <Route path="register" element={ <RegisterPage /> }/>
        <Route path="/loginRegister" element={ <LoginRegisterPage /> }/>
        <Route path="/" element={ <HomePage/> }/>
      </Routes>
    </div>
    )
}

export default App