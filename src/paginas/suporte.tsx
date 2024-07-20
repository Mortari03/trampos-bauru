import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../estilo/suporte.css";

const Suporte: React.FC = () => {
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
      question: "Como cadastro uma ou mais vagas?",
      answer: "Lorem, ipsum dolor.",
    },
    {
      question: "Como insiro informações sobre minha empresa na plataforma?",
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
        <h2>Suporte</h2>
      </div>
      <div className="Faq">
        <h2>FAQ</h2>
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
    </div>
  );
};

export default Suporte;
