import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from './components/Footer'
import Particulas from "./components/Particulas";


// import Landing from "./pages/landing/Landing";
// import AboutMe from "./components/AboutMe";
// import Portfolio from "./pages/portfolio/Portfolio";

// import SocialIcons from "./components/SocialIcons";

function App() {
  
  const personalDetails  = {
    name: "Mario Canales",
    location: "Madrid, ES",
    email: "canalessanchezmario@gmail.com",
    availability: "Abierto a escuchar ofertas",
    brand: "Creo soluciones y aplicaciones con las últimas tecnologías en el desarrollo web.\n \nMe gusta desarrollar en la plataforma .NET para aprovechar su capacidad multiplataforma con Xamarin/MAUI. \nReact o Angular son mis opciones favoritas para el desarrollo del FrontEnd.\n Además, he creado aplicaciones, que hacen usos de recursos en Azure o AWS.",
    presentar:"Dejame Presentarme",
    yoSoy:"Yo soy Mario",
    saludo: "Encantado de conocerte",
    pos:"Soy desarrollador FullStack, multiplataforma y multicloud",
    Inicio: "Inicio",
    Conoceme: "Conóceme",
    portfolio: "Portfolio"
    };

    
  return (
    <>
      <Header />
      <Particulas className="tsparticles" />

      <AnimatedRoutes personalDetails={personalDetails} />
      <Footer />
    </>
  );
}

export default App;
