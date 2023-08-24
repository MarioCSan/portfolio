import Typewriter from "typewriter-effect";
import SocialIcons from "../../components/SocialIcons";
import { Link } from "react-router-dom";

const Landing = ({ name }) => {

  const styles = {
    landing: {
      height: "calc(95% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#101010'
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "90%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
    
  };

  
  return(
    <section className="landing" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description  mb-4">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .typeString("Desarrollador Backend")
                .pauseFor(1500)
                .deleteChars(7)
                .pauseFor(500)
                .typeString("Frontend")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Traigo tus ideas a la vida")
                .start();
            }}
          />
        </div>
        <div className="m-4 m p-6 btncontainer">
          <Link to="/about">
            <button className="btn m-4 downloadCV button">Conóceme</button>
          </Link>
          <Link to="/portfolio">
            <button className="btn m-4 downloadCV button">Portfolio</button>
          </Link>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
