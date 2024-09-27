import React, { useState } from "react";
import "./Header.css";
import logo from "./img/username.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        {/* Logo */}
        <div className="logo">
          <img
            src={logo}
            style={{ width: "60px", height: "60px", marginRight: "10px" }}
          />
          <h1>Métodos de cifrado</h1>
        </div>

        {/* Menú de navegación */}
        <nav className={isOpen ? "nav-menu open" : "nav-menu"}>
          <ul>
            <li>
              <Link to={"/"}>Encriptación</Link>
            </li>
            <li>
              <Link to={"/Document"}>Documentación</Link>
            </li>
            <li>
              <Link to={"/Extra"}>Extra</Link>
            </li>
          </ul>
        </nav>

        {/* Icono de menú hamburguesa */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
