// Importes do React

import React, { useState } from "react";

// Importes do Router-Dom

import { Link } from "react-router-dom";

// Importes de CSS

import "../../estilo/cabecalho.css";



function Cabecalho() {

  // Estado para controlar a visibilidade do drop-down

  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Função para alternar a visibilidade do drop-down

  const toggleDropdown = () => {

    setDropdownVisible(!dropdownVisible);

  };


  return (

    <div className="div-conteiner">

      <div className="imagem">

        <img className="Logo" src="/img/Logo.png" alt="Logo" />

        <div>

          <div className="tags-li">

            <nav>

              <ul className="infos-cab">

                <li>

                  <strong>

                    <Link to="/">TRAMPOS</Link>

                  </strong>

                </li>

                <li>

                  <strong>

                    <Link to="/carreiras">CARREIRAS</Link>

                  </strong>

                </li>

                <li className="dropdown">

                  <strong onClick={toggleDropdown}>

                    <Link to="#">POR QUE NÓS ?</Link>

                  </strong>

                  {dropdownVisible && (

                    <div className="dropdown-content">

                      <Link to="/quemsomos">Quem Somos</Link>

                      <Link to="/valores">Valores</Link>

                      <Link to="/historia">História</Link>

                    </div>

                  )}

                </li>

                <li>

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
