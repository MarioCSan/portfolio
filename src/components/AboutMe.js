import aboutMeImg from "../images/aboutme.jpg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/mario-canales-cv.pdf";
import { hover } from "@testing-library/user-event/dist/hover";

const AboutMe = ({ name, email, location, availability, brand, pos, saludo }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });


  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Mario-Canales-cv.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={aboutMeImg} alt={name} />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4> {saludo} </h4>
            <h5> {pos} </h5>
            <div className="contentDescription">
              <p>
                Creo soluciones web con las últimas tecnologías disponibles.
                Dispongo de conocimientos en las últimas tecnologías para el
                desarrollo de aplicaciones web con diseños modernos y
                atractivos.
              </p>
              <br/>
              <p>
                El diseño y funcionalidad del FrontEnd es una parte fundamental
                para una página web moderna, mantenible y con una deuda técnica
                baja, para ello hago uso de las versiones más nuevas de React,
                Angular y JavaScript.
              </p>
              <br/>
              <p>
              Pero para que una aplicación web funcione correctamente es necesario que el BackEnd funcione correctamente y devuelva los datos rápidamente. Para hacer eso, desarrollo APIs con seguridad desarrolladas desde .NET haciendo uso de microservicios y NuGets para ampliar la funcionalidad y realizar desarrollos más rápidos.
              </p>
            </div>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Ubicación:</span>
                  <p>{location}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Disponibilidad:</span>
                  <p>{availability}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Conocimientos en:</span>
                  <br />
                  <img
                    height="35"
                    alt=" html"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                  />
                  <img
                    height="35"
                    alt="css"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                  />
                  <img
                    height="35"
                    alt="javascript"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                  />
                  <img
                    height="35"
                    alt="bootstarp"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
                  />
                  <img
                    height="35"
                    alt=".NET CORE"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/dotnet/dotnet.png"
                  />
                  <img
                    height="35"
                    alt="React"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                  />
                  <img
                    height="35"
                    alt="Angular"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                  />
                  <img
                    height="35"
                    alt="git "
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                  />
                  <img
                    height="35"
                    alt="Azure "
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/azure/azure.png"
                  />
                  <img
                    height="35"
                    alt="SQL Server "
                    src="https://raw.githubusercontent.com/github/explore/96943574ba0c0340ba6ea1e6f768e9abe43e34e1/topics/sql-server/sql-server.png"
                  />
                </div>
                {/* <div className="col-12 col-md-6 info">
                 
                </div> */}
              </div>
            </div>
            <div className="buttonContainer">
              <button
                className="btn downloadCV"
                onClick={handleDownload}
                disabled={downloading}
              >
                {downloading ? "Descargando..." : "Descargar CV"}
              </button>{" "}
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
