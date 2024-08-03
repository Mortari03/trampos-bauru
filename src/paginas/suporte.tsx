// Importes do React
import React, { useState } from "react";
// Importes do Router-Dom
import { Link } from "react-router-dom";
// Importes de Icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faUser,
  faEnvelope,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
// Importes de CSS
import "../estilo/suporte.css";
// Importes de Paginas
import Rodape from "../componentes/rodape";
import Cabecalho from "../componentes/cabecalho";

function Suporte() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqsCandidatos = [
    {
      question: "Como posso me cadastrar?",
      answer:
        "Você pode se cadastrar clicando no botão 'Cadastrar' na página inicial e preenchendo o formulário.",
      iconLeft: faUser,
    },
    {
      question: "Como posso buscar vagas?",
      answer:
        "Utilize a barra de pesquisa e os filtros disponíveis para encontrar vagas que se encaixem no seu perfil.",
      iconLeft: faQuestionCircle,
    },
    {
      question: "Como posso atualizar meu perfil?",
      answer:
        "Acesse sua conta e vá até a seção 'Perfil' para editar suas informações e currículos.",
      iconLeft: faUser,
    },
    {
      question: "Como posso entrar em contato com o suporte?",
      answer:
        "Você pode entrar em contato conosco através do formulário nesta página.",
      iconLeft: faEnvelope,
    },
  ];

  const faqsEmpresas = [
    {
      question: "Como posso cadastrar uma vaga?",
      answer: "Acesse sua conta e clique em 'Cadastrar Vaga'.",
      iconLeft: faUser,
    },
    {
      question: "Como posso gerenciar minhas vagas?",
      answer: "Vá até a seção 'Minhas Vagas' em sua conta.",
      iconLeft: faQuestionCircle,
    },
    {
      question: "Como posso entrar em contato com o suporte?",
      answer:
        "Você pode entrar em contato conosco através do formulário nesta página.",
      iconLeft: faEnvelope,
    },
    {
      question: "Terei algum custo adicional?",
      answer:
        "Não combramos nada pelos serviços utilizados em nossa plataforma !.",
      iconLeft: faQuestionCircle,
    },
  ];

  return (
    <div>
      <Cabecalho />
      <div className="suporte_container">
        <div className="suporte_titulo_principal">
          <h1>SUPORTE</h1>
          <h3>
            Estamos aqui para ajudar! Se você tiver alguma dúvida, entre em
            contato conosco.
          </h3>
        </div>

        <div className="suporte_formulario_container">
          <div className="suporte_formulario">
            <input
              type="text"
              placeholder="Nome"
              className="suporte_formulario_input"
            />
            <input
              type="email"
              placeholder="Email"
              className="suporte_formulario_input"
            />
            <textarea
              placeholder="Digite sua mensagem"
              className="suporte_formulario_textarea"
            ></textarea>
            <button className="botões-principais">ENVIAR</button>
          </div>
          <div className="suporte_formulario_imagem" />
        </div>

        <div className="suporte_faq_container">
          <h1>Perguntas Frequentes (FAQ)</h1>
          <div className="suporte_faq_sections">
            <div className="suporte_faq_section">
              <img
                src="/img/sup/ParaCandidatos.jpg"
                alt="Para Candidatos"
                className="suporte_faq_section_imagem"
              />
              <h2 className="suporte_faq_section_titulo">Para Candidatos</h2>
              {faqsCandidatos.map((faq, index) => (
                <div className="suporte_faq_item" key={index}>
                  <div
                    className="suporte_faq_item_pergunta"
                    onClick={() => toggleDropdown(index)}
                  >
                    <FontAwesomeIcon
                      icon={faq.iconLeft}
                      className="suporte_faq_item_icon"
                    />
                    {faq.question}
                    <FontAwesomeIcon
                      icon={activeIndex === index ? faChevronUp : faChevronDown}
                    />
                  </div>
                  {activeIndex === index && (
                    <div className="suporte_faq_item_resposta">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="suporte_faq_section">
              <img
                src="/img/sup/ParaEmpresas.jpg"
                alt="Para Empresas"
                className="suporte_faq_section_imagem"
              />
              <h2>Para Empresas</h2>
              {faqsEmpresas.map((faq, index) => (
                <div className="suporte_faq_item" key={index}>
                  <div
                    className="suporte_faq_item_pergunta"
                    onClick={() =>
                      toggleDropdown(index + faqsCandidatos.length)
                    }
                  >
                    <FontAwesomeIcon
                      icon={faq.iconLeft}
                      className="suporte_faq_item_icon"
                    />
                    {faq.question}
                    <FontAwesomeIcon
                      icon={
                        activeIndex === index + faqsCandidatos.length
                          ? faChevronUp
                          : faChevronDown
                      }
                    />
                  </div>
                  {activeIndex === index + faqsCandidatos.length && (
                    <div className="suporte_faq_item_resposta">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default Suporte;
