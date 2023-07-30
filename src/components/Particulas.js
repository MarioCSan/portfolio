import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particulas = () => {
  
  const particlesInit = async (main) => { 
    console.log(main); 
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
    // starting from v2 you can add only the features you need reducing the bundle size 
    await loadFull(main); 
  }; 
  const particlesLoaded = (container) => {
    console.log(container);
  }; 
  return (
    <div style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
      {" "}
      <Particles
        className="tsparticles"
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 12,
              density: {
                enable: false,
                value_area: 200,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              options: {
                sides: 5,
              },
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: false,
                speed: 2,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: false,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 600,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 3.5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          
          retina_detect: true,
          background: {
            color: "#111",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </div>
  );
};
export default Particulas;
