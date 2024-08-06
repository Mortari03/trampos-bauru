//Importes do React
import React from "react";
import { Link } from "react-router-dom";
//Importes de Icones
import "../estilo/para_candidato.css";
import Rodape from "../componentes/rodape";
import Cabecalho from "../componentes/cabecalho";
//Importes de Paginas

function ParaCandidato() {
  return (
    <div>
      <Cabecalho />

      <div className="paracontainer1">

      <div className="porquenos2">
        <h3>Dentre tantas opções por aí, por que nós?</h3>
      </div>

        <div className="porqueeu">
          <h1> Por que eu, <span className="candidato">candidato(a)</span>, devo escolher o
            <span className="tramposfacil"> Trampos Fácil ?</span></h1>
        </div>

        <div className="upcarreira"><h2>Tá afim de dar um UP na sua carreira ?  <br />
          Então vem pro Trampo Fácil! Aqui, nós entendemos que a busca por emprego pode ser um desafio,
          e estamos aqui para tornar essa jornada mais simples, rápida e eficaz.</h2>
        </div>


        <div className="paraimagem1">
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


      <div className="nossaprioridade">
        <h1 className="nossaprioridadeh1"> Nossa Prioridade </h1>
      </div>

      <div className="texto5">
        <h2 className="textorodape">No Trampo Fácil, sua carreira é nossa prioridade. <br />
          Entra nessa com a gente e descobre como podemos te ajudar a alcançar seus
          <br /> objetivos de um jeito descontraído e eficiente! </h2>
      </div>

      < Rodape />
    </div>
  );
}

export default ParaCandidato;
