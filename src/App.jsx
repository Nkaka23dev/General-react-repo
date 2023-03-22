import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import RoutesLayout from "./layout/RoutesLayout";
import HelperLayout from "./layout/HelperLayout";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Careers, { CareerLoader } from "./pages/Careers";
import CareersLayout from "./layout/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RoutesLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelperLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="careers" element={<CareersLayout />}>
        <Route index loader={CareerLoader} element={<Careers />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
