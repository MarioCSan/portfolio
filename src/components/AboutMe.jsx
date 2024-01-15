import aboutMeImg from "../images/aboutme.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/Mario-Canales-cv.pdf";
import projectImages from "../images.json";
import { Link } from "react-router-dom";


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
    <div className="aboutContainer" id="#about">
      <div className="row container">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <img src={aboutMeImg} alt={name} style={{ opacity: 0.9 }} />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
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
              <br />
              <p>
                El diseño y funcionalidad del FrontEnd es una parte fundamental
                para una página web moderna, mantenible y con una deuda técnica
                baja, para ello hago uso de las versiones más nuevas de React,
                Angular y JavaScript.
              </p>
              <br />
              <p>
                Pero para que una aplicación web funcione correctamente es
                necesario que el BackEnd funcione correctamente y devuelva los
                datos rápidamente. Para hacer eso, desarrollo APIs con seguridad
                desarrolladas desde .NET haciendo uso de microservicios y NuGets
                para ampliar la funcionalidad y realizar desarrollos más
                rápidos.
              </p>
            </div>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p className="pt-2">
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
                {/* <div className="col-12 col-md-6 info">
                  <span>Ubicación:</span>
                  <p>{location}</p>
                </div> */}
                <div className="col-12 col-md-6 info">
                  <span>Disponibilidad:</span>
                  <p className="pt-2">{availability}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-12 info pt-2">
                  <span className="mb-4">Conocimientos en:</span>
                  <div className="pt-3 col-12 col-md-12 info">
                    {projectImages.map((lang, i) => {
                      return <img key={i} src={lang.imagen} alt={lang.title} />;
                    })}
                  </div>
                </div>
                {/* <div className="col-12 col-md-6 info">
                 
                </div> */}
              </div>
            </div>
            <div className="buttonContainer mt-4">
              <button
                className="btn downloadCV"
                onClick={handleDownload}
                disabled={downloading}
              >
                {downloading ? "Descargando..." : "Descargar CV"}
              </button>

              <Link to="/Contacto" rel="noreferrer" className="btn downloadCV">
                {" "}
                Envíame un mensaje{" "}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
