// Importes do React
import React from "react";
// Importes do Router-Dom (se necessário)
// Importes de Icones (se necessário)
// Importes de CSS
import "../estilo/trampos.css";
// Importes de Paginas
import Cabecalho from "../componentes/cabecalho";
import DetalheVagas from "../componentes/DetalheVagas";
import VagaResumo from "../componentes/VagaResumo";
import { Vagas } from "../types/interfaces";

function Trampos() {

    const vagaExemplo: Vagas = {
      Nomevaga: "Desenvolvedor Full Stack",
      Cidade: ['Bauru'],
      Estado: ["SP"],
      Salario: "R$ 8.000,00",
      Tipocontrato: ["CLT"],
      Modelotrabalho:["Remoto"],
      Turno: "Diurno",
      Beneficios: ["Vale Refeição", "Assistência Médica", "Home Office"],
      DescricaoVaga: "Atuar no desenvolvimento de aplicações web usando React e NestJS."
    };
  

  return (
    <div>
      <Cabecalho />
    </div>
  );
}

export default Trampos;
