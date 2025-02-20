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
                Soy un <strong>desarrollador especializado en .NET Core</strong>, con experiencia creando
                <strong> soluciones web y APIs REST</strong> para sectores dinámicos como los viajes y servicios financieros.
                Mis habilidades incluyen además el manejo de <strong>SQL Server, JavaScript y React</strong>, lo que me permite ofrecer
                un enfoque completo en el desarrollo, desde el backend hasta interfaces dinámicas y funcionales.
              </p>
              <br />
              <p>
                A lo largo de mi trayectoria, me he centrado en construir aplicaciones escalables y alineadas con los
                principios de <strong><i>clean code</i></strong> y <strong><i>SOLID</i></strong>, siempre con el objetivo de optimizar procesos y generar
                un impacto positivo en los negocios. Además, cuento con certificaciones en <strong>AZ-204</strong> y <strong>DVA-C01</strong>.
                Además, gracias a la certificacion de <strong><i>Google Project manager</i></strong> puedo saber como piensa la empresa y el negocio pudiendo crear mejores soluciones
                y actuar como un comodin para cualquiera de esas posiciones.
              </p>
              <br />
              <p>
                Con un nivel de inglés <strong>C2</strong> y un <strong>enfoque en la mejora continua</strong>, mi objetivo es fusionar tecnología y estrategia
                para desarrollar soluciones innovadoras que se adapten a las necesidades del mercado. Si buscas a alguien que combine
                habilidades técnicas, visión estratégica y comunicación efectiva, estás en el lugar adecuado.
              </p><br />
              <div className="badges-container">
                <h2 className="certs">Mis certificaciones:</h2>
                <a href="https://www.credly.com/badges/ffac012f-2153-414c-a95f-a977fbebae47/public_url" target="_blank">
                  <img className="badges" src="./projectImages/image.png" alt="Amazon DVA-C01" />
                </a>

                <a href="https://www.credly.com/badges/f38c45ea-c9f1-44aa-ac0f-0410ca716a95/public_url" target="_blank">
                  <img className="badges" src="./projectImages/az294.png" alt="Micorosft AZ204" />
                </a>

                <a href="https://www.credly.com/badges/56076e06-b7ab-4c3d-8d95-01294a97a42e/public_url" target="_blank">
                  <img className="badges" src="./projectImages/GCC.png" alt="Google Project Manager" />
                </a>
              </div>
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
                      return <img key={i} src={lang.imagen} alt={lang.title} style={{ paddingRight: "2px" }} />;
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
