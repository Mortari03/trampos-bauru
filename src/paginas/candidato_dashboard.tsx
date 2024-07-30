//Importes do React
import React from "react";
//Importes do Router-Dom
//Importes de Icones
//Importes de CSS
import "../estilo/candidato_dashboard.css";
//Importes de Paginas
import CabecalhoCandidato from "../componentes/cabecalho_candidato";
import Rodape from "../componentes/rodape";

function CandidatoDashboard() {
  return (
    <div>
      <CabecalhoCandidato />
      <div>candidato_dashboard</div>
      <Rodape />
    </div>
  );
}

export default CandidatoDashboard;
