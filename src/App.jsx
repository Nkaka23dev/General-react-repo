import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
