// Importes do React
// Importes do Router-Dom (se necessário)
// Importes de Icones e Outros
// Importes de CSS
import "../estilo/para_empresa.css";
// Importes de Paginas
import Rodape from "../componentes/rodape";
import Cabecalho from "../componentes/cabecalho";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faClock,
  faBookOpen,
  faUsers,
  faStar,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

function ParaEmpresas() {
  const cards = [
    {
      icone: faThumbsUp,
      titulo: "Acesso a Talentos Qualificados",
      descricao:
        "Nossa plataforma conecta você a um pool diversificado de candidatos, permitindo que você encontre profissionais que se alinhem perfeitamente às suas necessidades.",
      imagem: "/img/paraempresas/AcessoTalentos.png",
    },
    {
      icone: faClock,
      titulo: "Feedback e Avaliação",
      descricao:
        "Oferecemos ferramentas que permitem que você receba feedbacks sobre suas vagas e processos seletivos, ajudando a aprimorar continuamente suas estratégias de recrutamento.",
      imagem: "/img/paraempresas/FeedbackAvaliação.png",
    },
    {
      icone: faBookOpen,
      titulo: "Visibilidade Aumentada",
      descricao:
        "Ao anunciar suas vagas no Trampo Fácil, sua empresa ganha visibilidade em uma plataforma moderna e acessível, atraindo candidatos que estão realmente interessados em fazer parte do seu time.",
      imagem: "/img/paraempresas/VisibilidadeAumentada.png",
    },
    {
      icone: faUsers,
      titulo: "Recursos de RH",
      descricao:
        "Aproveite nosso blog e seções de dicas para se manter atualizado sobre as melhores práticas de recrutamento e tendências do mercado, ajudando sua empresa a se destacar.",
      imagem: "/img/paraempresas/RecursosRH.png",
    },
    {
      icone: faStar,
      titulo: "Facilidade no Agendamento de Entrevistas",
      descricao:
        "Facilite a comunicação e o agendamento de entrevistas com candidatos, tornando o processo mais eficiente e transparente.",
      imagem: "/img/paraempresas/AgendamentoEntrevistas.png",
    },
    {
      icone: faHandsHelping,
      titulo: "Sistema de Avaliação de Candidatos",
      descricao:
        "Permita que sua equipe avalie candidatos de forma organizada, ajudando a tomar decisões mais informadas.",
      imagem: "/img/paraempresas/AvaliaçãoCandidatos.png",
    },
  ];

  return (
    <div>
      <Cabecalho />
      {/* Introdução */}
      <div className='pe_container_principal'>
        <div className='pe_empresa_texto'>
          <h3 className='pe_empresa_titulo'>
            Dentre tantas opções por ai, por que nós ?
          </h3>
          <h2 className='pe_empresa_chamada'>
            Seu negócio se conecta com{" "}
            <span className='texto_alternativo_azulvivo'>mais facilidade</span> {""}
            aos candidatos que sua empresa procura !
          </h2>
          <p className='pe_empresa_p'>
            No <span className='texto_alternativo_ciano'>Trampo Fácil</span>, entendemos
            que encontrar o candidato ideal pode ser um desafio. Por isso, criamos uma
            plataforma que não apenas facilita o processo de recrutamento, mas também
            proporciona uma experiência enriquecedora para os empregadores.
          </p>
        </div>
        <div className='pe_imagem_sobrenos'></div>
      </div>

      {/* Cards */}
      <div className='pe-cards-container'>
        <div className='pe-cards'>
          {cards.map((card, index) => (
            <div
              className='pe-card'
              key={index}
            >
              <div className='pe-card-imagem'>
                <img
                  src={card.imagem}
                  alt={card.titulo}
                />
              </div>
              <div className='pe-card-icone'>
                <FontAwesomeIcon icon={card.icone} />
              </div>
              <div className='pe-card-titulo'>{card.titulo}</div>
              <div className='pe-card-descricao'>{card.descricao}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Parceiros */}
      <div className='pe-parceiros'>
        <h1>Nossos Parceiros</h1>
        <div className='pe-logos-parceiros'>
          <div className='pe-logo-parceiro'>
            100x100 px <br /> logo Empresa
          </div>
          <div className='pe-logo-parceiro'>
            100x100 px <br /> logo Empresa
          </div>
          <div className='pe-logo-parceiro'>
            100x100 px <br /> logo Empresa
          </div>
          <div className='pe-logo-parceiro'>
            100x100 px <br /> logo Empresa
          </div>
        </div>
      </div>

      <Rodape />
    </div>
  );
}

export default ParaEmpresas;
