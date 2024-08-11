// Importes do React
// Importes do Router-Dom (se necessário)
// Importes de Icones e Outros
// Importes de CSS
import "../estilo/para_candidato.css";
// Importes de Paginas

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

function ParaCandidatos() {
  const cards = [
    {
      icone: faThumbsUp,
      titulo: "Plataforma Amigável e Acolhedora",
      descricao:
        "No Trampo Fácil, oferecemos uma interface moderna e super fácil de usar, projetada pra você encontrar as oportunidades perfeitas pro seu perfil.",
      imagem:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      icone: faClock,
      titulo: "Feedback Rápido e Transparente",
      descricao:
        "Sabemos que aquela espera depois de se candidatar pode ser um porre. Por isso, garantimos que você receba um feedback rapidinho das empresas.",
      imagem:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      icone: faBookOpen,
      titulo: "Recursos pra Turbinar sua Carreira",
      descricao:
        "Além de vagas, nossa seção 'Carreiras' tem um blog recheado de dicas e novidades sobre o mercado de trabalho e RH.",
      imagem:
        "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      icone: faUsers,
      titulo: "Comunidade Maneira e Networking",
      descricao:
        "Ao se inscrever no Trampo Fácil, você faz parte de uma comunidade maneira de profissionais.",
      imagem:
        "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      icone: faStar,
      titulo: "Vagas Exclusivas e Perfeitas pra Você",
      descricao:
        "Trabalhamos com várias empresas locais, então você tem acesso a oportunidades que não estão em outros lugares.",
      imagem:
        "https://images.pexels.com/photos/3184318/pexels-photo-3184318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      icone: faHandsHelping,
      titulo: "Apoio e Orientação",
      descricao:
        "Estamos aqui pra te ajudar em cada passo da sua jornada. Queremos que você se sinta confiante e preparado.",
      imagem:
        "https://images.pexels.com/photos/3184401/pexels-photo-3184401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  return (
    <div>
      <Cabecalho />
      {/* Introdução */}
      <div className='pc_container_principal'>
        <div className='pc_candidato_texto'>
          <h3 className='pc_candidato_titulo'>
            POR QUE VOCÊ, CANDIDATO(A), DEVE ESCOLHER O TRAMPO FÁCIL?
          </h3>
          <h2 className='pc_candidato_chamada'>
            Tá afim de dar um{" "}
            <span className='texto_alternativo_ciano'>UP na sua carreira?</span> Então vem
            pro <span className='texto_alternativo_azulvivo'>Trampos Fácil!</span>
          </h2>
          <p className='pc_candidato_p'>
            Aqui, nós entendemos que a busca por emprego pode ser um desafio, e estamos
            aqui pra tornar essa jornada mais simples, rápida e eficaz.
          </p>
        </div>
        <div className='pc_imagem_sobrenos'></div>
      </div>

      {/* Cards */}
      <div className='pc-cards-container'>
        <div className='pc-cards'>
          {cards.map((card, index) => (
            <div
              className='pc-card'
              key={index}
            >
              <div className='pc-card-imagem'>
                <img
                  src={card.imagem}
                  alt={card.titulo}
                />
              </div>
              <div className='pc-card-icone'>
                <FontAwesomeIcon icon={card.icone} />
              </div>
              <div className='pc-card-titulo'>{card.titulo}</div>
              <div className='pc-card-descricao'>{card.descricao}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParaCandidatos;
