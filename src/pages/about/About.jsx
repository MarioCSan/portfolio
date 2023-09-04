import AboutMe from "../../components/AboutMe";

const About = ({ name, location, brand, email, availability, presentar, yoSoy, pos, saludo  }) => {
  return (
    <section className="about">
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} pos={pos} saludo={saludo}/>
    </section>
  );
};

export default About;
