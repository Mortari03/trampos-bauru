import React from "react";
import { Link } from "react-router-dom";
import "../estilo/cadastro_empresa.css";

function CadastroEmpresa() {
  return (
    <div className="tela_cad">
      <div className="conteiner">
        <Link to="/prelogin" className="Botao-Voltar_cand">
          <img className="Voltar_Cand" src="/img/Voltar.png" alt="Voltar" />
        </Link>
        <div className="imagem_cad">
          <img className="img_ilus" src="/img/imgint.png" alt="ilustração" />
        </div>
        <div className="card_cad">
          <div className="texto_emp">
            <h1 className="T1_emp">
              Já Imaginou o jeito fácil de publicar <br /> e acompanhar Suas Vagas?
            </h1>
            <br />
            <br />
            <h2>Crie sua conta para acessar e publique milhares de vagas.</h2>
          </div>
          <div className="box_input">
            <input type="text" placeholder="Nome da Empresa" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="text" placeholder="CNPJ" />
          </div>
          <div className="text_bot_emp">
            <h3>
              <input
                type="checkbox"
                className="accept_checkbox_emp"
                id="conditions"
              />
              <label htmlFor="conditions">
                Li e concordo com as condições legais e a política de privacidade.
              </label>
            </h3>
            <br />
            <br />
            <h3>
              <input
                type="checkbox"
                className="accept_checkbox_emp"
                id="communications"
              />
              <label htmlFor="communications">
                Autorizo o Trampos Fácil a enviar comunicações comerciais sobre
                produtos, serviços e eventos dos seus parceiros e colaboradores.
              </label>
            </h3>
          </div>
          <div className="box_input">
            <input
              className="Button_Cad_emp"
              type="button"
              value="Cadastre-se"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroEmpresa;
