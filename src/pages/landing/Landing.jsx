import Typewriter from "typewriter-effect";
// import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";
import { Link } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import Footer from "../../components/Footer";
// import landingImage from "../../images/me2.png"
// import { motion } from "framer-motion";

const Landing = ({ name }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const styles = {
    landing: {
      height: "calc(90%)",
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

  const mouseOver = ({clientX, clientY, currentTarget}) =>{
    let {left, top} = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  } 
  
  return (
    <section className="landing" style={styles.landing} onMouseMove={mouseOver}>
      <motion.div
        style={{
          background: useMotionValue`
            radial-gradient(
              100px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.50),
              transparent 10%
            )
          `,
        }}/>
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description  mb-4">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .typeString("Desarrollador Full Stack")
                .pauseFor(1500)
                .deleteChars(10)
                .pauseFor(500)
                .typeString("Multiplataforma")
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
      <div className="image-container">
        {/* <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt="Soy yo"
        /> */}

        <SocialIcons />
       
      </div>
      
    </section>
  );
};

export default Landing;
