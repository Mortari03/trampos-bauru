import React, { useState } from "react";
import "../estilo/trampos.css";
import Cabecalho from "../componentes/cabecalho";
import VagaResumida from "../componentes/vagaresumida";
import VagaDetalhada from "../componentes/vagadetalhada";

type Vaga = {
  id: number;
  nomeVaga: string;
  descricao: string;
};

// Lista de vagas disponíveis
const vagas: Vaga[] = [
  { id: 1, nomeVaga: "Desenvolvedor Frontend", descricao: "Vaga para desenvolvedor frontend com experiência em React." },
  { id: 2, nomeVaga: "Desenvolvedor Backend", descricao: "Vaga para desenvolvedor backend com experiência em Node.js." },
  { id: 3, nomeVaga: "DevOps", descricao: "Vaga para especialista em DevOps e infraestrutura." },
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
      <div className="Conteiner">
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
