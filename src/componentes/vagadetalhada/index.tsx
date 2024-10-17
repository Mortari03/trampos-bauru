// Exemplo do componente VagaDetalhada
import React from 'react';
import '../../estilo/vagadetalhada.css'

// Adicione a nova prop 'nomeVaga' ao componente
function VagaDetalhada({ nomeVaga, descricao, salario, homeOffice, planoSaude, ajudaCusto }: { 
  nomeVaga: string; descricao: string; salario: String, homeOffice: string; planoSaude:string; ajudaCusto:string; }) {
  return (
    <div className="vaga-detalhada">
    <h2 className="vaga-titulo">{nomeVaga}</h2>
    <p className="vaga-descricao">{descricao}</p>
    <div className="vaga-salario">
      <strong>Salário:</strong> <span>{salario}</span>
    </div>
    <div className="vaga-home">
      <strong>Homeo_ffice</strong> <span>{homeOffice}</span>
    </div>
    <div className="plano">
      <strong>Plano</strong> <span>{planoSaude}</span>
    </div>
    <div className="vaga-home">
      <strong>ajudaCusto</strong> <span>{ajudaCusto}</span>
    </div>
    

  </div>

  );
}

export default VagaDetalhada;
