//Importes do React
import React from "react";
import { Link } from "react-router-dom";
//Importes de Icones
//Importes de CSS
import "../estilo/para_empresa.css";
import Rodape from "../componentes/rodape";
import Cabecalho from "../componentes/cabecalho";
//Importes de Paginas

function ParaEmpresas() {
  return (
    <div>

      <Cabecalho />
      <div className="paracontainer1">
      <div className="porquenos">
        <h3>Dentre tantas opções por aí, por que nós?</h3>
      </div>

      <div className="seunegocio">
        <h1>Seu negócio se conecta com <span className="maisfacilidade">mais facilidade</span> aos candidatos que sua empresa procura!</h1>
        <br />
      </div>

      <div className="notrampofacil">
        <h3>No Trampo Fácil, entendemos que encontrar o candidato ideal pode ser um desafio.
          Por isso, criamos uma plataforma que não apenas facilita o processo de recrutamento,
          mas também proporciona uma experiência enriquecedora para os empregadores.</h3>
      </div>

      <div className="imagem1">
        <p>IMAGEM</p>
      </div>

    </div>

      <div className="paracontainer2">

        <div className="quadrado2">
          <div className="paraimagem2"> IMAGEM </div>
          <div className="paraicone2"> ICONE DE JOINHA </div>
          <div className="plataformaamigavel2"> Plataforma Amigável E Acolhedora </div>
          <div className="texto2"> No Trampo Fácil, oferecemos uma interface moderna e super fácil de usar, <br />
            projetada pra você encontrar as oportunidades perfeitas pro seu perfil. </div>
        </div>

        <div className="quadrado2">

          <div className="paraimagem2">IMAGEM</div>
          <div className="paraicone2">ICONE DE JOINHA</div>
          <div className="plataformaamigavel2">Plataforma Amigável E Acolhedora</div>
          <div className="texto2">No Trampo Fácil, oferecemos uma interface moderna e super fácil de usar, <br />
            projetada pra você encontrar as oportunidades perfeitas pro seu perfil.</div>

        </div>

      </div>

      {/* <div className="paracontainer3">  */}

      <div className="paracontainer3">

        <div className="quadrado3">
          <div className="paraimagem3"> IMAGEM </div>
          <div className="paraicone3"> ICONE DE JOINHA </div>
          <div className="plataformaamigavel3"> Plataforma Amigável E Acolhedora </div>
          <div className="texto3"> No Trampo Fácil, oferecemos uma interface moderna e super fácil de usar, <br />
            projetada pra você encontrar as oportunidades perfeitas pro seu perfil. </div>
        </div>

        <div className="quadrado3">

          <div className="paraimagem3">IMAGEM</div>
          <div className="paraicone3">ICONE DE JOINHA</div>
          <div className="plataformaamigavel3">Plataforma Amigável E Acolhedora</div>
          <div className="texto3">No Trampo Fácil, oferecemos uma interface moderna e super fácil de usar, <br />
            projetada pra você encontrar as oportunidades perfeitas pro seu perfil.</div>

        </div>

      </div>


      {/* <div className="paracontainer4">  */}


      <div className="paracontainer4">

        <div className="quadrado4">
          <div className="paraimagem4"> IMAGEM </div>
          <div className="paraicone4"> ICONE DE JOINHA </div>
          <div className="plataformaamigavel4"> Plataforma Amigável E Acolhedora </div>
          <div className="texto4"> No Trampo Fácil, oferecemos uma interface moderna e super fácil de usar, <br />
            projetada pra você encontrar as oportunidades perfeitas pro seu perfil. </div>
        </div>

        <div className="quadrado4">

          <div className="paraimagem4">IMAGEM</div>
          <div className="paraicone4">ICONE DE JOINHA</div>
          <div className="plataformaamigavel4">Plataforma Amigável E Acolhedora</div>
          <div className="texto4">No Trampo Fácil, oferecemos uma interface moderna e super fácil de usar, <br />
            projetada pra você encontrar as oportunidades perfeitas pro seu perfil.</div>

        </div>

      </div>


      <div className="nossosparceiros">
        <h1 className="nossosparceirosh1"> Nossos Parceiros </h1>
      </div>

      <div className="quatroimagens">

        <div className="quatroimagens1">100x100 px <br /> logo Empresa </div>
        <div className="quatroimagens2">100x100 px <br /> logo Empresa </div>
        <div className="quatroimagens3">100x100 px <br /> logo Empresa </div>
        <div className="quatroimagens4">100x100 px <br /> logo Empresa </div>
      </div>





      < Rodape />
    </div>
  );
}

export default ParaEmpresas;
