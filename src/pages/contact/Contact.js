import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import Form from "../../components/Form";

const Contact = ({ name, email, location }) => {
  return (
    <section className="contact d-flex">
      <PageHeader title="Mantengámonos en contacto" description="Envíame un mensaje" className="Contacto"/>
      <div className="contactWrap container">
          <Form />
        </div>
      <SocialIcons />
    </section>
  );
};

export default Contact;
