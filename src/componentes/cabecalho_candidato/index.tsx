import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../estilo/menu_candidato.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

function CabecalhoCandidato() {
  return (
    <div className="conteiner_barra_candidato">
      <div className="imagem">
        <img className="Logo" src="/img/Logo.png" alt="Logo" />

        <div>
          <div className="tag_barra">
            <nav>
              <ul className="cabecalho_candidato_infor">
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

                <li>
                  <strong>
                    <Link to="/quemsomos">QUEM SOMOS</Link>
                  </strong>
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

        <div>
          <Link to="/candidato_dashboard">
            <button className="config_perfil_candidato">
              <FontAwesomeIcon icon={faUser} className="icone_candidato" />
            </button>
          </Link>
        </div>
      </div>

      <div className="wave-bar"></div>
    </div>
  );
}

export default CabecalhoCandidato;
