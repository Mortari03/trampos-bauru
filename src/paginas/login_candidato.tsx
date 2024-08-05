import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import "../estilo/login_candidato.css";
import { Link } from "react-router-dom";

function LoginCandidato() {
  return (
    <div className="Conteiner_Login_cand">
      <div className="Box_Login_cand">
        <div className="header-login">
        <Link to="/prelogin" className="botao-voltar">
            <FontAwesomeIcon icon={faArrowLeft} className="icone-voltar" />
          </Link>
          <img className="logo-cadastro" src="/img/Logo.png" alt="Logo" />
        </div>
        <FontAwesomeIcon icon={faUser} className="icone_cand"></FontAwesomeIcon>
        <br />
        <button>GOOGLE</button>
        <br />
        <h3>Ou Insira Seu</h3> <h3 className="texto_email">Email</h3>
        <br />
        <input type="text" placeholder="EMAIL" />
        <br />
        <input type="password" placeholder="SENHA" />
        <br />
        <div className="link-esqueci-senha">
          <Link to="/esqueci_senha" className="esqueci_senha">
            <h3>Esqueci a Senha</h3>
          </Link>
        </div>
        <br />
        <div className="botao_login">
          <button>CONTINUAR</button>
        </div>
        <div>
          <br />
          <h2>Voce é novo no <span className="texto_final_cand">TRAMPOS FÁCIL</span> ? </h2>
          <br />
        </div>
      </div>
      
    </div>
  );
}

export default LoginCandidato;
