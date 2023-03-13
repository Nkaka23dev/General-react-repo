import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

export const AppContext = createContext();

createContext
function App() {
  const [userName, setUsername] = useState("");
  return (
    <AppContext.Provider value={{ userName, setUsername }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
