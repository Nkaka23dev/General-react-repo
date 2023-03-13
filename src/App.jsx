import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false
        //You can change the window focus to true and see what happen on the fetched data.
      }
    }
  });
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
