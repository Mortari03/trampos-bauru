import React from "react";
// Importes do Router-Dom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
// Importes de CSS
import "../estilo/login_candidato.css";
// Importes de Paginas
import { Link } from "react-router-dom";

function LoginCandidato() {
  return (
    <div className="Conteiner_Login_cand">
      <div className="Box_Login_cand">
        <h1 className="class_login">
          <p>LOGIN</p>
        </h1>
        <input type="text" placeholder="EMAIL" />
        <br />
        <input type="password" placeholder="SENHA" />
        <Link to="/esqueci_senha" className="esqueci_senha">
        <h3>Esqueci a Senha</h3>
        </Link>
        <div className="botao_login">
          <button>CONTINUAR</button>
        </div>
      </div>
    </div>
  );
}

export default LoginCandidato;
