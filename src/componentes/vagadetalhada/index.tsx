// Exemplo do componente VagaDetalhada
import React from 'react';
import '../../estilo/vagadetalhada.css'

// Adicione a nova prop 'nomeVaga' ao componente
function VagaDetalhada({ nomeVaga, descricao, salario }: { nomeVaga: string; descricao: string; salario: String }) {
  return (
    <div className="vaga-detalhada">
    <h2 className="vaga-titulo">{nomeVaga}</h2>
    <p className="vaga-descricao">{descricao}</p>
    <div className="vaga-salario">
      <strong>Salário:</strong> <span>{salario}</span>
    </div>
  </div>

  );
}

export default VagaDetalhada;
