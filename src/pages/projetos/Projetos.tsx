import React from "react";
import "./Projetos.css";
// import "./../../scrpt";

function Projetos() {
  return (
    <>
      <p className="texto-projetos">Olá, sou Douglas Rocha.</p>
      <div className="alinhamneto-texto-img">
        <div id="slider">
          <img
            className="img-projeto"
            src="https://i.imgur.com/cuuJ0s6.png"
            alt=""
            height={500}
          />
        </div>
        <div className="ajuste-texto">
          <p className="texto-projetos-frase">
            Creio que a tecnologia em junção com o design faz com que ideias
            boas se tornem excelentes realidades.
          </p>
        </div>
      </div>
    </>
  );
}
export default Projetos;
