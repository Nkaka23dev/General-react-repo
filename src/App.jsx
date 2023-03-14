import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import { Provider } from "react-redux"
import { store } from "./store"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
    </Provider>
  )
}
export default App
