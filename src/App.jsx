import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CareersLayout from "./layout/CareersLayout";
import HelperLayout from "./layout/HelperLayout";
import PageLayout from "./layout/pageLayout";
import About from "./pages/About";
import Careers, { careersLoad } from "./pages/careers/Careers";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelperLayout />}>
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQs />} />
      </Route>
      <Route path="careers" element={<CareersLayout />}>
        <Route index loader={careersLoad} element={<Careers/>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
