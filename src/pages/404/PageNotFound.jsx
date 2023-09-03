import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ufo from '../../images/ufo.svg'
import { useEffect, useState } from "react";
/**
 * Represents the 404 Page Not Found component.
 * This component is displayed when a user tries to access a non-existent page.
 *
 * @component
 */

const PageNotFound = () => {
  const [rotation, setRotation] = useState(0)
  
  const rotate = () => {
   setRotation(rotation+20);
    setTimeout(() => {
      setRotation(rotation-20)
    }, 200);
  }


  return (
    <main className="contact container" >
      {/* Display the page header */}
      <PageHeader title="Ésta no es la página que buscáis." description="Uh oh!" />

      <div className="error-description">
        <div className="row">
          <div className="col" style={{ color: "#d1bdbdd2" }}>
            <p>Lo siento, la página que estas buscando no existe.</p>
            <p>
              Por favor, revisa la URL o vuelve a otra sección de este sitio.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/">
            <button className="btn downloadCV button">Ir al inicio</button>
          </Link>
        </div>
        <div>
          <img src={ufo} style={{transform: `rotate(${rotation}deg)`, width:'45%'}} onClick={rotate} alt='OVNI'/>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;