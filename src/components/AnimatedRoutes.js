import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";

const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();
  console.log(personalDetails)
  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <Landing
            name={personalDetails.name}
            tagline={personalDetails.tagline}
          />
        }
      />
      
      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
            brand={personalDetails.brand}
            yoSoy={personalDetails.yoSoy}
            presentar={personalDetails.presentar}
            pos={personalDetails.pos}
            saludo={personalDetails.saludo}
          />
        }
      />

      <Route path="/portfolio" element={<Portfolio />} />
      <Route
        path="/contact"
        element={
          <Contact
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
          />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
