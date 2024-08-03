// Importes do React
import React from "react";
// Importes do Router-Dom (se necessário)
// Importes de Icones (se necessário)
// Importes de CSS
import "../estilo/trampos.css";
// Importes de Paginas
import Cabecalho from "../componentes/cabecalho";
import Rodape from "../componentes/rodape";

function Trampos() {
  return (
    <div className="pagina">
      <Cabecalho />

      <div className="conteudo"></div>

      <Rodape />
    </div>
  );
}

export default Trampos;
