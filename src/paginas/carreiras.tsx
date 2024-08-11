//Importes do React
import React from "react";
//Importes do Router-Dom
//Importes de Icones
//Importes de CSS
//Importes de Paginas
import "../estilo/carreira.css";
import Cabecalho from "../componentes/cabecalho";

function Carreiras() {
  return (
    <div>
      <Cabecalho />
      <div>
        <h1>
          Pagina De <span className='texto_alternativo_ciano'>Carreiras</span>
        </h1>
        <h2>
          Pagina De <span className='texto_alternativo_azul'>Carreiras</span>
        </h2>
        <h3>Pagina De Carreiras</h3>
        <p>Pagina De Carreiras</p>
      </div>
 
    </div>
  );
}

export default Carreiras;
