import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, location, brand, email, availability, presentar, yoSoy,  saludo, soydesarrollador,  }) => {
  console.log(yoSoy)
  return (
    <section className="about">
      <PageHeader title={yoSoy} description={presentar} />
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} />
    </section>
  );
};

export default About;
