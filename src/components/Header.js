// import NavLinks from "./NavLinks";
import logo from "../images/logoN.webp";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="header">
      <a href="/" rel="noreferrer">
        <img className="logo" src={logo} alt="Logo" width='' height=''  />
      </a>
      <NavLinks />
    </header>
  
  );
};

export default Header;
