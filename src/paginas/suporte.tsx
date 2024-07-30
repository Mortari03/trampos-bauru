//Importes do React
import React, { useState } from "react";
//Importes do Router-Dom
//Importes de Icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
//Importes de CSS
import "../estilo/suporte.css";
//Importes de Paginas
import { Link } from "react-router-dom";
import Rodape from "../componentes/rodape";
//importes do Router-Dom

function Suporte() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "Como fazer meu cadastro?", answer: "Lorem ipsum sit amet." },
    {
      question: "Como cadastrar o meu currículo?",
      answer: "Lorem ipsum dolor amet.",
    },
    {
      question: "Posso fazer alterações em meu currículo após o cadastro?",
      answer: "Lorem ipsum.",
    },
    {
      question: "Onde e como vou receber o retorno/feedback das empresas?",
      answer: "Lorem, ipsum dolor.",
    },
    {
      question: "Como fazer meu cadastro?",
      answer: "Lorem, ipsum dolor.",
    },
    {
      question: "Como fazer meu cadastro?",
      answer: "Lorem ipsum dolor sitem.",
    },
    {
      question:
        "Como altero ou retiro uma oferta de vaga do meu perfil empresarial?",
      answer: "Lorem, ipsum dolor.",
    },
    {
      question:
        "Terei algum custo adicional ao usar o Trampo Facil para Empresas?",
      answer: "Lorem, ipsum dolor.",
    },
  ];

  return (
    <div>
      <div className="Sup">
        <h1 className="TagSup">Suporte</h1>
        <br />

        <h3 className="TagPrincipal">
          Estamos aqui para te ajudar! Se você tiver alguma dúvida, entre em
          contato conosco
        </h3>
        <br />
        <div className="ContainerSup">
          <div className="DadosSup">
            <div className="Nomebarra">
              {" "}
              <input type="Text" placeholder="Digite seu nome " />{" "}
            </div>

            <br />

            <input className="BarraEmail" type="Email" placeholder="Email" />
            <br />

            <input
              placeholder="Digite sua mensagem"
              className="BarraMensagem"
            ></input>
            <br />
            <div className="botao_login">
              <button>ENVIAR</button>
            </div>
          </div>

          <div className="AreaImagem">
            <h2>Imagem a ser colocada</h2>
          </div>
        </div>
      </div>
      <div className="Faq">
        <br />
        <br />

        <h1 className="TagPrincipal">Perguntas frequentes FAQ</h1>
        <br />
        <br />
        <div className="ContainerFaq">
          <div>
            <h2 className="ImgCandidatos">imagem candidatos</h2>
          </div>
          <div>
            <h2 className="imgEmpresas">imagem empresa</h2>
          </div>
        </div>
      </div>

      <div className="DivCentro">
        <div className="FAQContainer">
          <div className="FAQColumn">
            {faqs.slice(0, 4).map((faq, index) => (
              <div className="FAQItem" key={index}>
                <div
                  className="FAQQuestion"
                  onClick={() => toggleDropdown(index)}
                >
                  {faq.question}
                  <FontAwesomeIcon
                    icon={activeIndex === index ? faChevronUp : faChevronDown}
                  />
                </div>
                {activeIndex === index && (
                  <div className="FAQAnswer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
          <div className="FAQColumn">
            {faqs.slice(4).map((faq, index) => (
              <div className="FAQItem" key={index + 4}>
                <div
                  className="FAQQuestion"
                  onClick={() => toggleDropdown(index + 4)}
                >
                  {faq.question}
                  <FontAwesomeIcon
                    icon={
                      activeIndex === index + 4 ? faChevronUp : faChevronDown
                    }
                  />
                </div>
                {activeIndex === index + 4 && (
                  <div className="FAQAnswer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rodape">
        <h4>
          Ainda tem dúvidas?
          <br />
          Preencha nosso formulário do Google aqui ou <br />
          nos mande um e-mail em suporte@trampofacil.com
        </h4>
        <br />
      </div>

      <div>
        <Link to="/" className="Botao-Voltar">
          <img className="Voltar" src="/img/Voltar.png" alt="Voltar" />
        </Link>
      </div>
      <Rodape />
    </div>
  );
}

export default Suporte;
