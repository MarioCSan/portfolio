import aboutMeImg from "../images/aboutme.jpg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/mario-canales-cv.pdf";

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
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
                {/* <div className="col-12 col-md-6 info">
                  <span>Ubicación:</span>
                  <p>{location}</p>
                </div> */}
                <div className="col-12 col-md-6 info">
                  <span>Disponibilidad:</span>
                  <p>{availability}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-12 info">
                  <span className="mb-4">Conocimientos en:</span>
                  <div className="pt-2 col-12 col-md-12 info">
                    <img
                      src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                      alt="Javascript"
                    />
                    <img
                      src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                      alt="React"
                    />
                    <img
                      src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                      alt="TypeScript"
                    />
                    <img
                      src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"
                      alt="Angular"
                    />
                    <img
                      src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"
                      alt="C#"
                    />
                    <img
                      src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white"
                      alt=".NET"
                    />
                    <img
                      src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
                      alt="Next"
                    />
                    <img
                      src="https://img.shields.io/badge/Xamarin-3199DC?style=for-the-badge&logo=xamarin&logoColor=white"
                      alt="Xamarin"
                    />
                    <img
                      src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                      alt="HTML5"
                    />
                    <img
                      src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                      alt="CSS"
                    />
                    <img
                      src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
                      alt="Bootstrap"
                    />
                    {/* <img src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt='Node.js'/> */}
                    <img
                      src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=azure-devops&logoColor=white"
                      alt="AZURE"
                    />
                    <img
                      src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"
                      alt="Netlify"
                    />
                    <img
                      src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
                      alt="AWS"
                    />
                    <img
                      src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"
                      alt="npm"
                    />
                    <img
                      src="https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white"
                      alt="SQL server"
                    />
                    <img
                      src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
                      alt="MySQL"
                    />
                    <img
                      src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
                      alt="Postgres"
                    />
                    <img
                      src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                      alt="Mongo"
                    />
                    <img
                      src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
                      alt="Docker"
                    />
                    <img
                      src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white"
                      alt="Swagger"
                    />
                  </div>
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
              </button>

              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
