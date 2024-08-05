import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../estilo/login_empresa.css";
import Rodape from "../componentes/rodape";

function LoginEmpresa() {
  return (
    <div className="Conteiner_Login_Empre">
      <div className="Box_Login_Empre">
        <div className="header-login">
          <Link to="/prelogin" className="botao-voltar">
            <img className="voltar" src="/img/Voltar.png" alt="Voltar" />
          </Link>
          <img className="logo-cadastro" src="/img/Logo.png" alt="Logo" />
        </div>
        <FontAwesomeIcon icon={faUsers} className="icone-cadastro" />
        <br />
        <button>GOOGLE</button>
        <br />
        <h3>Ou Insira Seu</h3><h3 className="texto_email">Email</h3>
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
        <br />
        <div>
          <h2>Você é novo no <span className="texto_final_empr">TRAMPOS FÁCIL</span>?</h2>
        </div>
      </div>
    </div>
  );
}

export default LoginEmpresa;
