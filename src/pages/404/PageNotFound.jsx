import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ufo from '../../images/ufo.svg';
import { useState } from "react";
import { Toaster, toast } from "sonner";

/**
 * Represents the 404 Page Not Found component.
 * This component is displayed when a user tries to access a non-existent page.
 *
 * @component
 */
const PageNotFound = () => {
  const [rotation, setRotation] = useState(0);
  const [contador, setContador] = useState(1);
  const [isMovingOut, setIsMovingOut] = useState(false); // Controla si el OVNI se mueve fuera de la pantalla

  const rotate = () => {
    // Rota la imagen ligeramente al hacer clic
    setRotation(20);

    setTimeout(() => {
      setRotation(360);
    }, 200);

    setContador(contador + 1);

    if (contador === 4) {
      toast("¡Enhorabuena! ¡Has atrapado al platillo volante!");
      setRotation(140);

      // Mueve la imagen fuera de la pantalla
      setIsMovingOut(true);

      // Configura un tiempo aleatorio de 1 a 5 minutos para que reaparezca
      const randomTime = Math.random() * (5 - 1) + 1; // Genera un número entre 1 y 5
      setTimeout(() => {
        setIsMovingOut(false); // Reaparece en la pantalla
        setRotation(0); // Reinicia la rotación
        setContador(0); // Reinicia el contador
      }, randomTime * 60 * 1000); // Convierte minutos a milisegundos
    }
  };

  return (
    <main className="contact container">
      {/* Display the page header */}
      <PageHeader title="Ésta no es la página que buscáis." description="Oh oh!" />

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
        <div className="d-flex justify-content-center">
          <img
            src={ufo}
            style={{
              transform: isMovingOut ? 'translateX(200vw)' : `rotate(${rotation}deg)`, // Mueve el OVNI fuera de la pantalla (200vw)
              transition: 'transform 1s', // Transición suave para la rotación y el movimiento
              width: '45%',
            }}
            onClick={rotate}
            alt="OVNI"
          />
        </div>
        <Toaster position="top-center" />
      </div>
    </main>
  );
};

export default PageNotFound;
