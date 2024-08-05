import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
=======
import { faCircleArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
>>>>>>> 4f6cae8539aa8e01a680882b31db67ca599cd4b3
import "../estilo/login_candidato.css";
import { Link } from "react-router-dom";

function LoginCandidato() {
  return (
<<<<<<< HEAD
    <div className="Conteiner_Login_cand">
      <div className="Box_Login_cand">
        <div className="header-login">
        <Link to="/prelogin" className="botao-voltar">
            <FontAwesomeIcon icon={faArrowLeft} className="icone-voltar" />
=======
    <div className="lc-container">
      <div className="lc-caixa-login">
        <header className="lc-cabecalho-login">
          <Link to="/prelogin" className="btn_voltar">
            <FontAwesomeIcon icon={faCircleArrowLeft} />
            <span className="texto_voltar">Voltar</span>
>>>>>>> 4f6cae8539aa8e01a680882b31db67ca599cd4b3
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
  );
}

export default LoginCandidato;
