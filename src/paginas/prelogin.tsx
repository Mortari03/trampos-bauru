import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import "../estilo/prelogin.css";

function PreLogin() {
  return (
    <div className="container-cadastro">
      <div className="tela-cadastro">
        <div>
          <Link to="/" className="botao-voltar">
            <img className="voltar" src="/img/Voltar.png" alt="Voltar" />
          </Link>
        </div>
        <div className="imagem">
          <img className="logo-cadastro" src="/img/Logo.png" alt="Logo" />
        </div>
        <h1 className="titulo-cadastro">
          Faça seu Login No Trampos{" "}
          <span className="palavra-destaque">Fácil</span> <br />E Venha Fazer
          parte da Nossa Equipe
        </h1>
        <div className="centro-cadastro">
          <Link to="/login_candidato" className="botao-cadastro">
            <FontAwesomeIcon icon={faUser} className="icone-cadastro" />
            <h1 className="candidato">Candidato</h1>
          </Link>
          <Link to="/login_empresa" className="botao-cadastro">
            <FontAwesomeIcon icon={faUsers} className="icone-cadastro" />
            <h1 className="empresa">Empresa</h1>
          </Link>
        </div>
        <div className="titulo-final">
          <h1>
            Você é novo no Trampos{" "}
            <span className="palavra-destaque">Fácil</span>
          </h1>
          <h2 className="classe-mudavel">
            Cadastre-se como <Link to="/cadastro_candidatos">Candidato</Link> ou{" "}
            <Link to="/cadastro_empresas">Empresa</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PreLogin;
