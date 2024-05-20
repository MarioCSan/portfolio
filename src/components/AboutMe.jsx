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
                Todos tenemos una historia que contar. La mía empieza con una película. Piratas de Silicon Valley. 

                Si no sabes cuál es el argumento de la película, es sobre los orígenes de Apple con los Steves (Jobs y Wozniak) y de Microsoft con Bill Gates, Paul Allen, y más tarde, Steve Ballmer. 

              </p>
              <br/>
              <p>
                Volviendo a la historia, el filme comienza en el rodaje del ya mítico anuncio del Macintosh usando 1984 como referencía.
              
                En ese momento, quise ser como ellos. Aprender a programar y crear software que cambiase el mundo, que impactase a sus clientes y que inspirase. Elegí ese camino que no estuvo ausente de dificultades. 
               
              </p>
              <br/>
              <p>
                El primer paso con destino fue cuándo me matricule en el CFGS de Desarrollo Web el el IES Palomeras-Vallecas. Todo parecía estar encaminado. Parecía. 
              </p>
              <br/>
                Un virus decidió expandirse por el mundo y dejarnos encerrados durante unos meses. Eso pospuso mis planes. Muchos dirán que los frenó. Nada más lejos de la realidad. Tuve la gran oportunidad de estudiar un máster de Desarrollo web con REACT, ANGULAR y .NET core. Aprendí a usar AZURE y AWS y obtuve los certificados. 
              <p>
                <br/>
                Cuándo mis estudios terminaron, me dispuse a trabajar para obtener experiencia en estas tecnologías. Me enseñaron, aprendí, mejore y enseñe mis conocimientos. Cada día aprendo de aquellos que saben más que yo. Con este aprendizaje continuo, sigo mi sueño de cambiar el mundo. 
              </p>
              <br/>
              <p> 
                Con el paso de los años y recordando esa película, más me voy pareciendo a esa primera Apple, no solo disfruto de hacer un código bonito, si no que también sea bonito, fácil de usar y que causa un impacto en los usuarios.
              </p>
              <p>
                <br/>
                Aunque transforme ideas abstractas en un código funcioanl, también disfruto aplicando esos conocimientos al negocio. No descarto en aprovechar estos conocimientos y aplicarlos al negocio. Todo va de la mano. Si esto te parece interesante, quizás debamos tener una reunión y charlar tranquilamente.
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
