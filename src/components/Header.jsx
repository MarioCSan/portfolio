// import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import logo from "../images/logoN.png";
import NavLinks from "./NavLinks";


const Header = () => {
  return (
    <header className="header" >
      <Link to="/" rel="noreferrer">
        <img className="logo" src={logo}  alt="Logo" width='auto' height='auto'  />
      </Link>
      <NavLinks />
    </header>
  
  );
};

export default Header;
