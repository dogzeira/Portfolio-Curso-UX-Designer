import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-fundo">
        <div className="tamanho-fundo">
          <div id="efeito-navbar">
          <img className="img-logo"
              src="https://i.imgur.com/DPaWS2l.png"
              alt="Logo nome Douglas Rocha"
              height={250}
            />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="nome-projetos">Projetos</span>
            </Link>
            <Link to="/contato" style={{ textDecoration: "none" }}>
              <span className="nome-contato">Contato</span>
            </Link>
            <Link to="/sobre" style={{ textDecoration: "none" }}>
              <span className="nome-sobre">Sobre</span>
            </Link>
          </div>
        </div>
        
      </div>
      
    </>
  );
}
export default Navbar;
