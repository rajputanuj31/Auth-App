import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import SignIn from "./components/SignIn"
import SignOut from "./components/SignOut"
import Navbar from "./components/Navbar"
import  Profile  from "./components/Profile"
import  PrivateRoute  from "./components/PrivateRoute"

export default function App() {
  return (

    <BrowserRouter className='text-red-600 from-violet-400'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignOut/>}/>
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
      </BrowserRouter>
  )
}
