// import projectData from "./projectsData.json";
// import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";

const Portfolio = () => {
  // const ProjectList = () =>
  //   projectData.map((project, i) => (
  //     <Project
  //       key={i}
  //       id={project.id}
  //       title={project.title}
  //       technologies={project.technologies}
  //       image={project.image}
  //       color={project.bgcolor}
  //       github={project.github}
  //       deployed={project.deployed}
  //       description={project.description}
  //     />
  //   ));

  return (
    <section className="portfolio">
      <PageHeader title="Portfolio" description="Visualiza mi trabajo" />
      <div className="row">
      <PageHeader classname='portfolio' title="En construcción" description="" />
        {/* <ProjectList /> */}
      </div>
    </section>
  );
};

export default Portfolio;
