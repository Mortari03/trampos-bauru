import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../estilo/login_candidato.css";
import { Link } from "react-router-dom";

function LoginCandidato() {
  return (
    <div className="Conteiner_Login_cand">
      <div className="Box_Login_cand">
        <div className="header-login">
          <Link to="/prelogin" className="botao-voltar">
            <img className="voltar" src="/img/Voltar.png" alt="Voltar" />
          </Link>
          <img className="logo-cadastro" src="/img/Logo.png" alt="Logo" />
        </div>
        <FontAwesomeIcon icon={faUser} className="icone_cand"></FontAwesomeIcon>
        <br />
        <button>GOOGLE</button>
        <br />
        <h3 className="ponto_de_email">Ou Insira Seus <Link to="/pagina-a-linkar" className="email-link">Email</Link></h3>
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
