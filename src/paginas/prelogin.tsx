import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "../estilo/prelogin.css";

function PreLogin() {
  return (
    <div className="prelogin_container">
      <div className="prelogin_card">
        <div className="prelogin_card_cabecalho">
          <Link to="/" className="btn_voltar">
            <FontAwesomeIcon icon={faCircleArrowLeft} />
            <span className="texto_voltar">Voltar</span>
          </Link>
          <img className="Logo" src="/img/Logo.png" alt="Logo" />
        </div>
        <h3>
          Faça seu login no <br />
          <span className="texto_alternativo_ciano">TRAMPOS FÁCIL</span>
        </h3>
        <div className="prelogin_centro">
          <Link to="/login_candidato" className="prelogin_botao">
            <FontAwesomeIcon icon={faUser} className="prelogin_icone" />
            <span className="texto_alternativo_azulvivo">Candidato</span>
          </Link>
          <Link to="/login_empresa" className="prelogin_botao">
            <FontAwesomeIcon icon={faUsers} className="prelogin_icone" />
            <span className="texto_alternativo_azulvivo  ">Empresa</span>
          </Link>
        </div>
      </div>
      <div className="prelogin_container_final">
        <div className="prelogin_titulo_final">
          <h3>
            Você é novo no{" "}
            <span className="texto_alternativo_ciano">Trampos Fácil</span>
          </h3>
          <p>
            Cadastre-se como
            <br />
            <Link
              to="/cadastro_candidatos"
              className="texto_alternativo_azulvivo pre_candidato"
            >
              Candidato
            </Link>
            ou
            <Link
              to="/cadastro_empresas"
              className="texto_alternativo_azulvivo  pre_candidato"
            >
              Empresa
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PreLogin;
