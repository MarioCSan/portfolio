import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, email, availability, presentar, yoSoy, pos, saludo  }) => {
  
  return (
    <section className="about">
      <PageHeader title={yoSoy} description={presentar} />
      <AboutMe name={name} email={email} availability={availability} pos={pos} saludo={saludo}/>
    </section>
  );
};

export default About;
