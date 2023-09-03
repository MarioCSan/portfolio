import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
/**
 * Represents the 404 Page Not Found component.
 * This component is displayed when a user tries to access a non-existent page.
 *
 * @component
 */

const PageNotFound = () => {
  return (
    <main className="contact container">
      {/* Display the page header */}
      <PageHeader title="404 página no encontrada" description="Uh oh!" />

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
      </div>
    </main>
  );
};

export default PageNotFound;