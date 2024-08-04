import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import "../estilo/prelogin.css";

function PreLogin() {
  // Hook para navegação
  const navigate = useNavigate();

  // Função para voltar à página anterior
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="container-cadastro">
      <div className="card-cadastro">
        <div className="cabecalho-cadastro">
          <button className="botao-voltar" onClick={handleBackClick}>
            <FontAwesomeIcon icon={faArrowLeft} className="icone-voltar" />
          </button>
          <img className="logo-cadastro" src="/img/Logo.png" alt="Logo" />
        </div>
        <h1 className="titulo-cadastro">
          Faça seu Login No <span className="palavra-destaque">TRAMPOS FÁCIL</span>
        </h1>
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

      </div>

      <div className="conteiner-final">

        <div className="titulo-final">
          <h1>
            Você é novo no Trampos <span className="palavra-destaque">Fácil</span>
          </h1>

          <h2 className="classe-mudavel">
            Cadastre-se como <Link to="/cadastro_candidatos">Candidato</Link><br /> ou{" "}
            <Link to="/cadastro_empresas">Empresa</Link>
          </h2>

        </div>

      </div>

    </div>
  );
}

export default PreLogin;
