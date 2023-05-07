import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Mario Canales",
    location: "Madrid, ES",
    email: "canalessanchezmario@gmail.com",
    availability: "Abierto a escuchar ofertas",
    brand:
      "Creo soluciones y aplicaciones con las últimas tecnologías en el desarrollo web.\n \nMe gusta desarrollar en la plataforma .NET para aprovechar su capacidad multiplataforma. \nReact o Angular son buenas opciones para la parte del Front.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
