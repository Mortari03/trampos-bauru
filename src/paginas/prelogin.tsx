import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import "../estilo/prelogin.css";
import Rodape from "../componentes/rodape";

function PreLogin() {
  return (
    <div className="container-cadastro">

      <div className="tela-cadastro">

        <div className="cabecalho-cadastro">

          <Link to="/" className="botao-voltar">

            <img className="voltar" src="/img/Voltar.png" alt="Voltar" />

          </Link>

          <img className="logo-cadastro" src="/img/Logo.png" alt="Logo" />

        </div>

        <br />

        <h1 className="titulo-cadastro">

          Faça seu Login No {" "}

          <span className="palavra-destaque">TRAMPOS FÁCIL</span>

        </h1>

        <br />

        <div className="centro-cadastro">

          <Link to="/login_candidato" className="botao-cadastro">

            <FontAwesomeIcon icon={faUser} className="icone-cadastro" />

            <span className="texto-cadastro">Candidato</span>

          </Link>

          <Link to="/login_empresa" className="botao-cadastro">

            <FontAwesomeIcon icon={faUsers} className="icone-cadastro" />

            <span className="texto-cadastro">Empresa</span>

          </Link>

        </div>

        <br />

        <div className="titulo-final">

          <h1>

            Você é novo no Trampos{" "}

            <span className="palavra-destaque">Fácil</span>

          </h1>
          <br />
          <h2 className="classe-mudavel">

            Cadastre-se como <Link to="/cadastro_candidatos"><br />Candidato</Link> ou{" "}  <Link to="/cadastro_empresas">Empresa</Link>

          </h2>

        </div>

      </div>

    </div>
  );
}

export default PreLogin;
