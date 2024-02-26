import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"
import Projects from "./Pages/Projects"
import Header from "./components/Header"
import Foot from "./components/Foot"

function App() {


  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
        <Foot></Foot>
      </BrowserRouter>
    </>
  )
}

export default App
