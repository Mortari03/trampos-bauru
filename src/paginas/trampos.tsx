import React, { useEffect, useState } from "react";
import "../estilo/trampos.css";
import Cabecalho from "../componentes/cabecalho";
import VagaResumida from "../componentes/vagaresumida";
import VagaDetalhada from "../componentes/vagadetalhada";

type Vaga = {
  id: number;
  nomeVaga: string;
  descricao: string;
};

const vagas: Vaga[] = [
  { id: 1, nomeVaga: "Desenvolvedor Frontend", descricao: "Vaga para desenvolvedor frontend com experiência em React." },
  { id: 2, nomeVaga: "Desenvolvedor Backend", descricao: "Vaga para desenvolvedor backend com experiência em Node.js." },
  { id: 3, nomeVaga: "DevOps", descricao: "Vaga para especialista em DevOps e infraestrutura." },
  // Adicione mais vagas conforme necessário...
];

function Trampos() {
  const [vagaSelecionada, setVagaSelecionada] = useState<Vaga | null>(null);

  const fetchVagaDetails = async (vaga: Vaga) => {
    try {
      const response = await fetch(`https://api.example.com/vagas/${vaga.id}`);
      const data = await response.json();
      console.log(`Detalhes da vaga ${vaga.nomeVaga}:`, data);
      setVagaSelecionada({ ...vaga, descricao: data.descricao });
    } catch (error) {
      console.error(`Erro ao buscar detalhes da vaga ${vaga.nomeVaga}:`, error);
    }
  };

  const handleVagaClick = (vaga: Vaga) => {
    // Chama a API apenas quando a vaga é selecionada
    fetchVagaDetails(vaga);
  };

  return (
    <div>
      <Cabecalho />
      <div className="Conteiner">
        <div className="VagasResumo">
          {vagas.map((vaga, index) => (
            <button
              key={index}
              className="VagaBotao"
              onClick={() => handleVagaClick(vaga)}
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
