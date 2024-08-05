import React from "react";
import { Link } from "react-router-dom";
import "../estilo/cadastro_candidato.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CadastroCandidatos() {
  return (
    <div className="tela_cad">
      <div className="conteiner">
        <div className="imagem_cad">
          <Link to="/prelogin" className="botao-voltar">
            <FontAwesomeIcon icon={faArrowLeft} className="icone-voltar" />
          </Link>
          <img className="img_ilus" src="/img/imgint.png" alt="ilustração" />
        </div>
        <div className="card_cad">
          <h1 className="t1">O Seu Novo Próximo Emprego Está Aqui!</h1>
          <h2 className="t2">
            Crie sua conta para acessar e candidate-se à milhares de vagas.
          </h2>
          <h3 className="t3">Entre e comece a se candidatar</h3>
          <div className="box_button">
            <button className="cad_conta_google">Google</button>
          </div>
          <h3>Ou Continue seu Cadastro Aqui!</h3>
          <div className="box_input">
            <input type="text" placeholder="Nome Completo" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="text" placeholder="CPF" />
            <select className="box_select">
=======
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
>>>>>>> 4f6cae8539aa8e01a680882b31db67ca599cd4b3
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
<<<<<<< HEAD
          <div className="text_bot_cand">
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="accept_checkbox_cand"
                id="conditions"
              />
              <label htmlFor="conditions">
                Li e concordo com as condições legais e a política de
                privacidade.
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="accept_checkbox_cand"
                id="communications"
              />
              <label htmlFor="communications">
                Autorizo o Trampos Facil a enviar comunicações comerciais sobre
                produtos, serviços e eventos dos seus parceiros e colaboradores.
              </label>
            </div>
          </div>
          <div>
            <input className="Button_Cad" type="button" value="Cadastre-se" />
          </div>
=======

          <button className="cc-submit-btn">Cadastre-se</button>
>>>>>>> 4f6cae8539aa8e01a680882b31db67ca599cd4b3
        </div>
      </div>
    </div>
  );
}

export default CadastroCandidatos;
