import Header from "./components/Header";
import Footer from './components/Footer'
import Particulas from "./components/Particulas";
import { useEffect, useState } from "react";
import Loader from "./pages/Loader/Loader";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Portfolio from "./pages/portfolio/Portfolio";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/404/PageNotFound";


function App() {
  
  const personalDetails = {
    name: "Mario Canales",
    location: "Madrid, ES",
    email: "canalessanchezmario@gmail.com",
    availability: "Dispuesto a escuchar ofertas",
    brand:
      "Creo soluciones y aplicaciones con las últimas tecnologías en el desarrollo web.\n \nMe gusta desarrollar en la plataforma .NET para aprovechar su capacidad multiplataforma con Xamarin/MAUI. \nReact o Angular son mis opciones favoritas para el desarrollo del FrontEnd.\n Además, he creado aplicaciones, que hacen usos de recursos en Azure o AWS.",
    presentar: "Dejame Presentarme",
    yoSoy: "Soy Mario",
    saludo: "Encantado de conocerte",
    pos: "Soy desarrollador .NET y multicloud",
    Inicio: "Inicio",
    Conoceme: "Conóceme",
    portfolio: "Portfolio",
  };
    const styles = {
      landing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "500",
        position: "relative",
        bottom: "0px",
        zindex: 3,
        color: "#d1bdbdd2",
      },
    };


    const location = useLocation();

    const [showLoader, setShowLoader] = useState(true);

    const [originalTitle, setOriginalTitle] = useState();
  
    useEffect(() => {
      // Hide loader when initial route is loaded
      if (location.pathname !== "/") {
        setShowLoader(false);
      }
  
      if (!originalTitle) {
        setOriginalTitle(document.title);
      }
  
    }, [location, originalTitle]);
  
    
  return (
    <>
      {showLoader ? (
        // Show loader until initial route is loaded
        <Loader setShowLoader={setShowLoader} />
      ) : (
        <>
          <Header />
          <Particulas />

          {/* Define routes */}
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Landing
                  personalDetails={personalDetails}
                  tagline={personalDetails.tagline}
                />
              }
            />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/sobremi"
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

            <Route
              path="/contacto"
              element={
                <Contact
                  name={personalDetails.name}
                  location={personalDetails.location}
                  email={personalDetails.email}
                />
              }
            />
            <Route path="/404" element={<PageNotFound />} />
            {/* <Route path="/portfolio/:projectTitle" element={<ProjectDetails />} /> */}
            {/* Fallback route for unknown paths */}
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
          <footer tyle={styles.landing}>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
}

export default App;
