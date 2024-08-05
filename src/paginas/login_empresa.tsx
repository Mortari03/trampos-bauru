import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../estilo/login_empresa.css";
import Rodape from "../componentes/rodape";

function LoginEmpresa() {
  return (
    <div>
      <div className="le-container">
        <div className="le-caixa-login">
          <header className="le-cabecalho-login">
            <Link to="/prelogin" className="btn_voltar">
              <FontAwesomeIcon icon={faCircleArrowLeft} />
              <span className="texto_voltar">Voltar</span>
            </Link>
            <img className="Logo" src="/img/Logo.png" alt="Logo" />
          </header>
          <FontAwesomeIcon icon={faUsers} className="le-icone-cadastro" />
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
          <div className="le-info-cadastro">
            Você é novo no{" "}
            <span className="texto_alternativo_azul">TRAMPOS FÁCIL</span>?
            Cadastre-se como
            <Link to="/cadastro_empresas" className="texto_alternativo_ciano">
              Candidato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginEmpresa;
