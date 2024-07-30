import React from "react";
import { Link } from "react-router-dom";
import '../estilo/quemsomos.css';
import Cabecalho from "../componentes/cabecalho";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import Rodape from "../componentes/rodape";

function Quemsomos() {
  return (
    <div>
      <Cabecalho />

      <div className="sobreo">
        <h1>Sobre o <span className="tramposfacil">Trampos Fácil</span></h1>
      </div>

      <div className="sobrenoscontainer1">
        <div className="textobemvindos">
          <h2>Bem-vindo ao Trampos Fácil! Somos uma equipe de estudantes do curso de Desenvolvimento Full Stack do Senac Bauru, <br />
          unindo esforços para criar uma plataforma inovadora que facilita a busca por empregos na nossa cidade. <br />
          Nosso objetivo é conectar candidatos a oportunidades de trabalho de forma eficiente e segura.</h2>
        </div>
        <div className="imagemsobrenos"></div>
      </div>

      <div className="sobrenoscontainer2">
        <div className="nossamissao">
          <h2>Facilitar o acesso a oportunidades de emprego para os cidadãos, <br />
          promovendo uma experiência intuitiva e segura tanto para os candidatos quanto para as empresas.</h2>
        </div>
        <div className="nossavisao">
          <h2>Ser a principal plataforma de busca de empregos em Bauru, reconhecida pela sua eficácia e impacto positivo na comunidade.</h2>
        </div>
      </div>

      <div className="sobrenostitulo2">
        <h1>Nossos <span className="valores">Valores</span></h1>
      </div>
      
      <div className="sobrenoscontainer3">
        <div className="inovacao">
          <h4>Inovação: Buscamos constantemente melhorias e soluções criativas.</h4>
        </div>
        <div className="transparencia">
          <h4>Transparência: Valorizamos a honestidade e a clareza em todas as interações.</h4>
        </div>
        <div className="inclusao">
          <h4>Inclusão: Acreditamos que todos merecem acesso a oportunidades justas.</h4>
        </div>
      </div>

      <div className="sobrenostitulo3">
        <h1>Nossa <span className="equipe">Equipe</span></h1>
        
      </div>

      <div className="sobrenostitulo4">
        <h1>Impacto <span className="esperado">Esperado</span></h1>
      </div>

      <div className="textoimpacto">
         <h2 className="textoimpacto1">O Trampo Fácil tem o potencial de revolucionar a forma como os bauruenses encontram emprego, <br />
         contribuindo para a redução do desemprego local e promovendo o desenvolvimento econômico da região.</h2>
      </div>
      < Rodape />
    </div>
  );
}

export default Quemsomos;

