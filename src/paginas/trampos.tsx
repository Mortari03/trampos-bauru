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

function Trampos() {

 
  const [vagaSelecionada, setVagaSelecionada] = useState<Vaga | null>(null);

  const vagas: Vaga[] = [
    { id: 1, nomeVaga: "Desenvolvedor Frontend", descricao: "Vaga para desenvolvedor frontend com experiência em React." },
    { id: 2, nomeVaga: "Desenvolvedor Backend", descricao: "Vaga para desenvolvedor backend com experiência em Node.js." },
    { id: 3, nomeVaga: "DevOps", descricao: "Vaga para especialista em DevOps e infraestrutura." },
    { id: 4, nomeVaga: "UI/UX Designer", descricao: "Vaga para designer com foco em UI/UX." },
    { id: 5, nomeVaga: "Product Manager", descricao: "Vaga para gerente de produto com experiência em agilidade." },
  ];

  const handleVagaClick = (vaga: Vaga) => {
    setVagaSelecionada(vaga); 
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
            <VagaDetalhada nomeVaga={vagaSelecionada.nomeVaga} descricao={vagaSelecionada.descricao} />
          ) : (
            <p>Selecione uma vaga para ver os detalhes.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trampos;
