import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";
import Particulas from "../../components/Particulas";

const About = ({ name, location, brand, email, availability, presentar, yoSoy, pos, saludo  }) => {
  return (
    <section className="about">
      <PageHeader title={yoSoy} description={presentar} />
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} pos={pos} saludo={saludo}/>
    </section>
  );
};

export default About;
