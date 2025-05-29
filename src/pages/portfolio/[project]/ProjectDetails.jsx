import { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../../../components/PageHeader";
import PageNotFound from "../../404/PageNotFound";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import projects from "../../../_data/projects.json";

const ProjectDetails = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { projectTitle } = useParams();
  const project = projects.find(
    (project) => project.title.toLowerCase() === projectTitle
  );

  if (!project) {
    return <PageNotFound />;
  }

  return (
    <main className="container portfolio">
      <PageHeader title={project.title} description={project.description} />

      {/* Layout en fila */}
      <div
        className="projectDetails"
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "2rem",
          flexWrap: "wrap", // Responsivo
        }}
      >
        {/* Imagen lateral */}
        <div
          className="projectImage"
          style={{
            width: "20%",
            height: "30%",
            minWidth: "200px", // Para evitar que se vuelva demasiado pequeña
            maxWidth: "300px",
            aspectRatio: "4 / 3",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Image
            src={project.image}
            alt={project.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Contenido textual */}
        <div className="projectBodyContainer" style={{ flex: 1 }}>
          <div className="tech">
            {project.technologies.map((technology, i) => (
              <motion.span
                key={i}
                className="technology"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              >
                {technology + " "}
              </motion.span>
            ))}
          </div>

          <div className="projectBody">
            {project.body.split("\n").map((paragraph, i) => (
              <motion.p
                className="paragraph"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              >
                {paragraph}

              </motion.p>
            ))}
            {project.image2 && project.image2.trim() !== "" && (
              <Image
                src={project.image2}
                alt={project.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}

          </div>

          <motion.div
            style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "1rem" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: project.body.split("\n").length * 0.3,
            }}
          >
            <a href={project.github}>
              <Button name="Ver código" />
            </a>
            {!project.disabled && (
              <a href={project.deployed}>
                <Button name="Ver demo" />
              </a>
            )}
            <Link to="/portfolio">
              <Button name="Volver" color="#f72020" />
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
