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
import CareersDetails, { getCareerDetailsData } from "./pages/CareersDetails";
import CareersDetailsError from "./pages/ErrorPages/CareersDetailsError";
import DefaultError from "./pages/ErrorPages/DefaultError";
import HelpError from "./pages/ErrorPages/HelpError";
import CareersError from "./pages/ErrorPages/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RoutesLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelperLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<HelpError />} />
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersDetailsError />}
      >
        <Route
          index
          loader={CareerLoader}
          element={<Careers />}
          // errorElement={<CareersError />}
        />
        <Route
          path=":id"
          loader={getCareerDetailsData}
          element={<CareersDetails />}
          // errorElement={<CareersDetailsError />}
        />
      </Route>
      <Route path="*" element={<DefaultError />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
