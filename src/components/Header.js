import NavLinks from "./NavLinks";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <a href="/" rel="noreferrer">
        <img className="logo" src={logo} alt="Logo"  />
      </a>
      <NavLinks />
    </header>
  );
};

export default Header;
