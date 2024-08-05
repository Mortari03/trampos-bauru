import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import "../estilo/login_candidato.css";
import { Link } from "react-router-dom";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function LoginCandidato() {
  return (
    <div className="Conteiner_Login_cand">
      <div className="Box_Login_cand">
        <div className="header-login">
          <header>
            <Link to="/prelogin" className="botao-voltar">
              <FontAwesomeIcon icon={faArrowLeft} className="icone-voltar" />
            </Link>
            <img className="Logo" src="/img/Logo.png" alt="Logo" />
          </header>
          <FontAwesomeIcon icon={faUser} className="lc-icone-usuario" />

          <button className="botoes-principais">
            <FontAwesomeIcon icon={faGoogle} className="lc-icone-google" />
            GOOGLE
          </button>
          <p>Ou insira seu e-mail</p>
          <input type="text" placeholder="E-MAIL" className="lc-input" />
          <input type="password" placeholder="SENHA" className="lc-input" />

          <div className="lc-link-esqueci-senha">
            <Link to="/esqueci_senha" className="texto_alternativo_ciano">
              <span className="lc_esqueci-senha">Esqueci a Senha</span>
            </Link>
          </div>

          <button className="botoes-principais">CONTINUAR</button>

          <div className="lc-info-cadastro">
            Você é novo no{" "}
            <span className="texto_alternativo_azul">TRAMPOS FÁCIL</span>?
            Cadastre-se como
            <Link to="/cadastro_candidatos" className="texto_alternativo_ciano">
              Candidato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCandidato;
