// Exemplo do componente VagaDetalhada
import React from 'react';

// Adicione a nova prop 'nomeVaga' ao componente
function VagaDetalhada({ nomeVaga, descricao }: { nomeVaga: string; descricao: string }) {
  return (
    <div>
      <h1>{nomeVaga}</h1>
      <p>{descricao}</p>
    </div>
  );
}

export default VagaDetalhada;
