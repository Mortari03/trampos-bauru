import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../estilo/menu_empresa.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

function CabecalhoEmpresa() {
  return (
    <div className="conteiner_barra_empresa">
      <div className="imagem">
        <img className="Logo" src="/img/Logo.png" alt="Logo" />

        <div>
          <div className="tag_barra">
            <nav>
              <ul className="cabecalho_empresa_infor">
                <li>
                  <strong>
                    <Link to="/#">NOSSOS PRODUTOS</Link>
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
          <Link to="/empresa_dashboard">
            <button className="config_perfil_empresa">
              <FontAwesomeIcon icon={faUsers} className="icone_empresa" />
            </button>
          </Link>
        </div>
      </div>

      <div className="wave-bar"></div>
    </div>
  );
}

export default CabecalhoEmpresa;
