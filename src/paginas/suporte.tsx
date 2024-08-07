// Importes do React
import React, { useState } from "react";
// Importes de Icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faUser,
  faEnvelope,
  faQuestionCircle,
  faBuilding,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
// Importes de CSS
import "../estilo/suporte.css";
// Importes de Paginas
import Rodape from "../componentes/rodape";
import Cabecalho from "../componentes/cabecalho";

function Suporte() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário (e.g., enviar para um servidor)
    // Exibe a mensagem de sucesso
    setSucesso(true);
    // Limpa os campos de entrada
    setNome("");
    setEmail("");
    setMensagem("");
    // Remove a mensagem de sucesso após 5 segundos
    setTimeout(() => setSucesso(false), 3000);
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
      answer: "Você pode entrar em contato conosco através do formulário nesta página.",
      iconLeft: faEnvelope,
    },
  ];

  const faqsEmpresas = [
    {
      question: "Como posso anunciar uma vaga?",
      answer:
        "Após se cadastrar como empresa, você pode acessar o painel e clicar em 'Anunciar Vaga'.",
      iconLeft: faBuilding,
    },
    {
      question: "Como posso visualizar as candidaturas?",
      answer:
        "No painel de controle, você encontrará todas as candidaturas enviadas para suas vagas.",
      iconLeft: faQuestionCircle,
    },
    {
      question: "Posso editar uma vaga já publicada?",
      answer:
        "Sim, você pode editar ou remover suas vagas a qualquer momento através do painel.",
      iconLeft: faBuilding,
    },
    {
      question: "Como funciona o sistema de avaliação de candidatos?",
      answer:
        "Você pode avaliar candidatos diretamente no painel, deixando feedback e notas sobre cada um.",
      iconLeft: faBuilding,
    },
  ];

  return (
    <div>
      <Cabecalho />
      <div className='suporte_container'>
        {sucesso && (
          <div className='sucesso-alerta'>
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>Mensagem enviada com sucesso!</span>
          </div>
        )}
        <div>
          <h1>SUPORTE</h1>
          <p>
            Estamos aqui para ajudar! Se você tiver alguma dúvida, entre em contato
            conosco.
          </p>
        </div>

        <div className='suporte_formulario_container'>
          <form
            className='suporte_formulario'
            onSubmit={handleSubmit}
          >
            <input
              type='text'
              placeholder='Nome'
              className='suporte_formulario_input'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type='email'
              placeholder='Email'
              className='suporte_formulario_input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder='Digite sua mensagem'
              className='suporte_formulario_textarea'
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            ></textarea>
            <button
              type='submit'
              className='botoes-principais'
            >
              ENVIAR
            </button>
          </form>
          <div className='suporte_formulario_imagem' />
        </div>

        <div className='suporte_faq_container'>
          <h1>
            Perguntas Frequentes <span className='texto_alternativo_ciano'>(FAQ)</span>
          </h1>
          <div className='suporte_faq_sections'>
            <div className='suporte_faq_section'>
              <img
                src='/img/sup/ParaCandidatos.jpg'
                alt='Para Candidatos'
                className='suporte_faq_section_imagem'
              />
              <h2>Para Candidatos</h2>
              {faqsCandidatos.map((faq, index) => (
                <div
                  className='suporte_faq_item'
                  key={index}
                >
                  <div
                    className='suporte_faq_item_pergunta'
                    onClick={() => toggleDropdown(index)}
                  >
                    <FontAwesomeIcon
                      icon={faq.iconLeft}
                      className='suporte_faq_item_icon'
                    />
                    {faq.question}
                    <FontAwesomeIcon
                      icon={activeIndex === index ? faChevronUp : faChevronDown}
                    />
                  </div>
                  {activeIndex === index && (
                    <div className='suporte_faq_item_resposta'>{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>

            <div className='suporte_faq_section'>
              <img
                src='/img/sup/ParaEmpresas.jpg'
                alt='Para Empresas'
                className='suporte_faq_section_imagem'
              />
              <h2>Para Empresas</h2>
              {faqsEmpresas.map((faq, index) => (
                <div
                  className='suporte_faq_item'
                  key={index}
                >
                  <div
                    className='suporte_faq_item_pergunta'
                    onClick={() => toggleDropdown(index + faqsCandidatos.length)}
                  >
                    <FontAwesomeIcon
                      icon={faq.iconLeft}
                      className='suporte_faq_item_icon'
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
                    <div className='suporte_faq_item_resposta'>{faq.answer}</div>
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
