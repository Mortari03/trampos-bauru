//Importes do React
import React from "react";
//Importes do Router-Dom
import { Link } from "react-router-dom";
//Importes de Icones
//Importes de CSS
import "../../estilo/home.css";
//Importes de Paginas

function Cabecalho() {
  return (
    <div className="div-conteiner">
      <div className="imagem">
        <img className="Logo" src="/img/Logo.png" alt="Logo" />
        <div>
          <div className="tags-li">
            <nav>
              <ul className="infos-cab">
                <li>
                  {" "}
                  <strong>
                    <Link to="/">TRAMPOS</Link>
                  </strong>
                </li>
                <li>
                  {" "}
                  <strong>
                    <Link to="/carreiras">CARREIRAS</Link>
                  </strong>
                </li>
                <li>
                  {" "}
                  <strong>
                    <Link to="/porquenos">QUEM SOMOS?</Link>
                  </strong>
                </li>
                <li>
                  {" "}
                  <strong>
                    <Link to="/suporte">SUPORTE</Link>
                  </strong>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="botao-config">
          <Link to="/prelogin">
            <button className="botao-cabecalho">LOGIN/CADASTRO</button>
          </Link>
        </div>
      </div>
      <div className="wave-bar"></div>
    </div>
  );
}

export default Cabecalho;
