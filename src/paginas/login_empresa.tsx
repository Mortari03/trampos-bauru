import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import { faArrowLeft, faUsers } from "@fortawesome/free-solid-svg-icons";
=======
import { faCircleArrowLeft, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
>>>>>>> 4f6cae8539aa8e01a680882b31db67ca599cd4b3
import { Link } from "react-router-dom";
import "../estilo/login_empresa.css";
import Rodape from "../componentes/rodape";

function LoginEmpresa() {
  return (
<<<<<<< HEAD
    <div className="Conteiner_Login_Empre">
      <div className="Box_Login_Empre">
        <div className="header-login">
        <Link to="/prelogin" className="botao-voltar">
            <FontAwesomeIcon icon={faArrowLeft} className="icone-voltar" />
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
=======
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
>>>>>>> 4f6cae8539aa8e01a680882b31db67ca599cd4b3
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default LoginEmpresa;
