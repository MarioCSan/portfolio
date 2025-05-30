import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../../../components/PageHeader";
import PageNotFound from "../../404/PageNotFound";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import projects from "../../../_data/projects.json";

const ProjectDetails = () => {
  const location = useLocation();
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const images = [project.image2, project.image3].filter(Boolean);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <main className="container portfolio">
      <PageHeader title={project.title} description={project.description} />

      <div
        className="projectDetails"
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div
          className="projectImage"
          style={{
            width: "20%",
            height: "30%",
            minWidth: "200px",
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

        <div className="projectBodyContainer" style={{ flex: 1 }}>
          <div className="tech">
            {project.technologies.map((technology, i) => (
              <motion.span
                key={i}
                className="technology"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" }}
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
                transition={{ duration: 0.5, delay: i * 0.3, ease: "easeInOut" }}
              >
                {paragraph}
              </motion.p>
            ))}

            {images.length > 0 && (
              <div
                className="carousel"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  gap: "1rem",
                  marginTop: "1rem",
                  flexWrap: "nowrap",
                  overflow: "hidden",
                }}
              >
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    fontSize: "2rem",
                    cursor: "pointer",
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                  }}
                >
                  ‹
                </button>

                {/* Current Image */}
                <img
                  src={images[currentIndex]}
                  alt={project.name}
                  style={{
                    width: "60%",
                    cursor: "pointer",
                    borderRadius: "0.5rem",
                    flexShrink: 0,
                  }}
                  onClick={() => setLightboxImage(images[currentIndex])}
                />

                {/* Next Image Preview */}
                {images.length > 1 && (
                  <img
                    src={images[(currentIndex + 1) % images.length]}
                    alt={`${project.name}-next`}
                    style={{
                      width: "20%",
                      opacity: 0.5,
                      borderRadius: "0.5rem",
                      flexShrink: 0,
                    }}
                  />
                )}

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    fontSize: "2rem",
                    cursor: "pointer",
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                  }}
                >
                  ›
                </button>
              </div>
            )}
            
          </div>

          {lightboxImage && (
            <div
              onClick={() => setLightboxImage(null)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 9999,
                width: "100vw",
                height: "100vh",
                background: "rgba(0, 0, 0, 0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              <div style={{ position: "relative", width: "60vw", maxHeight: "80vh" }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxImage(null);
                  }}
                  style={{
                    position: "absolute",
                    top: "0.5rem",
                    right: "0.5rem",
                    background: "rgba(255,255,255,0.7)",
                    color: "#000",
                    fontSize: "1.5rem",
                    border: "none",
                    borderRadius: "50%",
                    padding: "0.25rem 0.5rem",
                    cursor: "pointer",
                    zIndex: 1,
                  }}
                >
                  ✕
                </button>
                <img
                  src={lightboxImage}
                  alt="Imagen ampliada"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "0.5rem",
                    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
