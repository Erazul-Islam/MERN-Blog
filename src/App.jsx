import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"
import Projects from "./Pages/Projects"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
