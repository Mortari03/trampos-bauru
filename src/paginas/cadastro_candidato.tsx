import React from "react";
import { Link } from "react-router-dom";
import "../estilo/cadastro_candidato.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CadastroCandidatos() {
  return (
    <div className="cc-container">
      <div className="cc-content">
        <div className="cc-image">
          <img className="cc-img" src="/img/imgint.png" alt="Ilustração" />
        </div>
        <div className="cc-form">
          <Link to="/prelogin" className="cc-back-btn">
            <FontAwesomeIcon icon={faCircleArrowLeft} />
            <span className="cc-back-text">Voltar</span>
          </Link>
          <h1 className="cc-title">Seu Novo Emprego Está Aqui!</h1>
          <p className="cc-subtitle">
            Crie sua conta para acessar e candidatar-se a milhares de vagas.
          </p>
          <h3 className="cc-section-title">Entre e comece a se candidatar</h3>

          <button className="cc-google-btn">Cadastrar com Google</button>

          <h3 className="cc-section-title">Ou continue seu cadastro aqui</h3>

          <form className="cc-input-group">
            <input
              type="text"
              placeholder="Nome Completo"
              className="cc-input"
            />
            <input type="email" placeholder="Email" className="cc-input" />
            <input type="password" placeholder="Senha" className="cc-input" />
            <input type="text" placeholder="CPF" className="cc-input" />
            <select className="cc-input cc-select">
              <option value="" disabled selected>
                Área de Atuação
              </option>
              <option value="tecnologia">Tecnologia</option>
              <option value="saude">Saúde</option>
              <option value="educacao">Educação</option>
              <option value="administracao">Administração</option>
              <option value="engenharia">Engenharia</option>
            </select>
          </form>

          <div className="cc-terms">
            <label className="cc-checkbox-label">
              <input type="checkbox" className="cc-checkbox" />
              Li e concordo com as condições legais e a política de privacidade.
            </label>
            <label className="cc-checkbox-label">
              <input type="checkbox" className="cc-checkbox" />
              Autorizo o Trampos Facil a enviar comunicações comerciais sobre
              produtos, serviços e eventos dos seus parceiros e colaboradores.
            </label>
          </div>

          <button className="cc-submit-btn">Cadastre-se</button>
        </div>
      </div>
    </div>
  );
}

export default CadastroCandidatos;
