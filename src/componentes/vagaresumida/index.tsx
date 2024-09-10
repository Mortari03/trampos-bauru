// Exemplo do componente VagaResumida
import React from 'react';

// Adicione a nova prop 'nomeVaga' ao componente
function VagaResumida({ nomeVaga }: { nomeVaga: string }) {
  return (
    <div>
      <h3>{nomeVaga}</h3>
    </div>
  );
}

export default VagaResumida;
