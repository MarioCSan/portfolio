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
  
  const personalDetails  = {
    name: "Mario Canales",
    location: "Madrid, ES",
    email: "canalessanchezmario@gmail.com",
    availability: "En busqueda activa de empleo",
    brand: "Creo soluciones y aplicaciones con las últimas tecnologías en el desarrollo web.\n \nMe gusta desarrollar en la plataforma .NET para aprovechar su capacidad multiplataforma con Xamarin/MAUI. \nReact o Angular son mis opciones favoritas para el desarrollo del FrontEnd.\n Además, he creado aplicaciones, que hacen usos de recursos en Azure o AWS.",
    presentar:"Dejame Presentarme",
    yoSoy:"Yo soy Mario",
    saludo: "Encantado de conocerte",
    pos:"Soy desarrollador FullStack, multiplataforma y multicloud",
    Inicio: "Inicio",
    Conoceme: "Conóceme",
    portfolio: "Portfolio"
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
  
      const handleTabChange = () => {
        if (document.hidden) {
          document.title = "👋🏻¡Hola! No te olvides de mi, Mario";
        } else {
          document.title = originalTitle;
        }
      };
  
      window.addEventListener("visibilitychange", handleTabChange);
      return () => window.removeEventListener("visibilitychange", handleTabChange);
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
                  name={personalDetails.name}
                  tagline={personalDetails.tagline}
                />
              }
            />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/sobremi"
              element={<About brand={personalDetails.brand} />}
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
            <Route path="/page-not-found" element={<PageNotFound />} />
            {/* <Route path="/portfolio/:projectTitle" element={<ProjectDetails />} /> */}
            {/* Fallback route for unknown paths */}
            <Route path="*" element={<Navigate to="/page-not-found" />} />
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
