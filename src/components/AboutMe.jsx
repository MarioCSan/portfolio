import aboutMeImg from "../images/aboutme.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/mario-canales-cv.pdf";
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
                Soy un <strong>desarrollador especializado en .NET Core</strong>, con más de 3 años de experiencia creando
                <strong> soluciones web y APIs REST</strong> para sectores como veterinaria, viajes y servicios financieros.
                Mis habilidades incluyen el manejo de <strong>SQL Server, JavaScript y React</strong>, lo que me permite ofrecer
                un enfoque completo en el desarrollo, desde el backend hasta interfaces dinámicas y funcionales.
              </p>
              <br/>
              <p>
                A lo largo de mi trayectoria, me he centrado en construir aplicaciones robustas, escalables y alineadas con los
                principios de <strong>clean code</strong> y <strong>SOLID</strong>, siempre con el objetivo de optimizar procesos y generar
                un impacto positivo en los negocios. Además, cuento con certificaciones en <strong>AZ-204</strong> y <strong>DVA-C01</strong>
                (actualmente en renovación) que avalan mi experiencia en entornos cloud como Azure y AWS, y estoy en proceso de obtener
                la certificación de <strong>Project Manager de Google</strong>.
              </p>
              <br/>
              <p>
                Con un nivel de inglés <strong>C2</strong> y un <strong>enfoque en la mejora continua</strong>, mi objetivo es fusionar tecnología y estrategia
                para desarrollar soluciones innovadoras que se adapten a las necesidades del mercado. Si buscas a alguien que combine
                habilidades técnicas, visión estratégica y comunicación efectiva, estás en el lugar adecuado.
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
                      return <img key={i} src={lang.imagen} alt={lang.title}  style={{paddingRight:"2px"}}/>;
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
