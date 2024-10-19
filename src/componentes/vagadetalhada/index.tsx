// Exemplo do componente VagaDetalhada
import React from 'react';
import '../../estilo/vagadetalhada.css'

// Adicione a nova prop 'nomeVaga' ao componente
function VagaDetalhada({ nomeVaga,salario, homeOffice, planoSaude, ajudaCusto, descricao }: { 
  nomeVaga: string; descricao: string; salario: String, homeOffice: string; planoSaude:string; ajudaCusto:string; }) {
  return (
    <div className="vaga-detalhada">
    <h2 className="vaga-titulo">{nomeVaga}</h2>
    
    <div className="vaga-salario">
      <strong>Salário:</strong> <span>{salario}</span>
    </div>
    <div className="vaga-home">
      <strong>HomeOffice</strong> <span>{homeOffice}</span>
    </div>
    <div className="plano">
      <strong>Plano</strong> <span>{planoSaude}</span>
    </div>
    <div className="vaga-home">
      <strong>ajudaCusto</strong> <span>{ajudaCusto}</span>

      <p className="vaga-descricao">{descricao}</p>
    </div>
    
    
  </div>

  );
}

export default VagaDetalhada;

