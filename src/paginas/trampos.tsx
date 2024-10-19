import React, { useState } from "react";
import "../estilo/trampos.css";
import Cabecalho from "../componentes/cabecalho";
import VagaResumida from "../componentes/vagaresumida";
import VagaDetalhada from "../componentes/vagadetalhada";

type Vaga = {
  id: number;
  nomeVaga: string;
  Salario: string;
  homeOffice?: string;
  planoSaude?: string;
  ajudaCusto?: string;
  descricao: string;
  
};

// Lista de vagas disponíveis
const vagas: Vaga[] = [
  {
    id: 1, nomeVaga: "Desenvolvedor Frontend",
    Salario: "R$ 2.500,00",
    homeOffice: "",
    planoSaude: "",
    ajudaCusto: "",
    descricao: "Estamos em busca de um Desenvolvedor Frontend com experiência em React para se juntar à nossa equipe em um ambiente colaborativo e dinâmico"+
    "Se você é apaixonado por criar interfaces incríveis e tem experiência em desenvolvimento de aplicações web, queremos te conhecer!",
    
  },
  {
    id: 2, nomeVaga: "Desenvolvedor Backend",
    descricao: "Vaga para desenvolvedor backend com experiência em Node.js.",
    Salario: '1.200,00'
  },
  {
    id: 3, nomeVaga: "DevOps",
    descricao: "Vaga para especialista em DevOps e infraestrutura.",
    Salario: '1.200,00'
  },
  {
    id: 4, nomeVaga: "Analista de Sistemas",
    descricao: "Vaga para especialista em DevOps e infraestrutura.",
    Salario: '1.200,00'
  },
  {
    id: 5, nomeVaga: "Product Owner",
    descricao: "Vaga para especialista em Requisitos e Gestão de Backlog.",
    Salario: '1.200,00'
  },
  {
    id: 6, nomeVaga: "Product Manager",
    descricao: "Vaga para profissional empenhado em manter seu produto atual e moderno.",
    Salario: '1.200,00'
  },
  {
    id: 7, nomeVaga: "Head Tech",
    descricao: "Vaga para gestor de equipe de TI com ênfase em Pessoas.",
    Salario: '1.200,00'
  },
  {
    id: 8, nomeVaga: "Desenvolvedor Java",
    descricao: "Vaga para especialista em desenvolvimento Java",
    Salario: '1.200,00'
  },
];

function Trampos() {
  const [vagaSelecionada, setVagaSelecionada] = useState<Vaga | null>(null);

  // Função chamada ao clicar em uma vaga
  const handleVagaClick = (vaga: Vaga) => {
    setVagaSelecionada(vaga); // Atualiza a vaga selecionada
  };

  return (
    <div>
      <Cabecalho />
      {/* <div className="Conteiner">
         <div className="VagasResumo">
          {vagas.map((vaga) => (
            <button
              key={vaga.id}
              className="VagaBotao"
              onClick={() => handleVagaClick(vaga)} // Chama a função ao clicar
            >
              <VagaResumida nomeVaga={vaga.nomeVaga} />
            </button>
          ))}
        </div>

        <div className="VagaD">
          {vagaSelecionada ? (
            <VagaDetalhada
              nomeVaga={vagaSelecionada.nomeVaga}
              descricao={vagaSelecionada.descricao}
              salario={vagaSelecionada.Salario}
            />
          ) : (
            <p>Selecione uma vaga para ver os detalhes.</p>
          )}
        </div>
      </div>
    </div> */}
      <div className="container">
        <div className="vagas-resumo">
          {vagas.map((vaga) => (
            <div
              key={vaga.id}
              className="vaga-card"
              onClick={() => handleVagaClick(vaga)}
            >
              <span className="vaga-nome">{vaga.nomeVaga}</span>
            </div>
          ))}
        </div>

        <div className="vaga-detalhe">
          {vagaSelecionada ? (
            <VagaDetalhada
              nomeVaga={vagaSelecionada.nomeVaga}
              descricao={vagaSelecionada.descricao}
              salario={vagaSelecionada.Salario}
              homeOffice={vagaSelecionada.homeOffice ?? 'Não informado'}  // Verifica se homeOffice existe
              planoSaude={vagaSelecionada.planoSaude ?? 'Não informado'}  // Verifica se planoSaude existe
              ajudaCusto={vagaSelecionada.ajudaCusto ?? 'Não informado'}  // Verifica se ajudaCusto existeo

            />
          ) : (
            <p>Selecione uma vaga para ver os detalhes.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trampos;
