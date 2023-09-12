import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";

const Contact = ({ name, email, location }) => {
  return (
    <>
      <main className="contact container">
        <PageHeader
<<<<<<< HEAD
          title="Pongámonos en contacto"
=======
          title="Ponte en contacto conmigo"
>>>>>>> 5686b5bc67edd94e75422239b1c34322d8f23d06
          description="Envíame un mensaje"
          className="Contacto"
        />

        <div className="contactWrap container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <Form />
            </div>

            <div className="col-12 col-lg-6">
              <ContactInfo name={name} location={location} email={email} />
            </div>
          </div>
        </div>
        <SocialIcons />
      </main>
    </>
  );
};

export default Contact;
