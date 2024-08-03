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
          <h2>Bem-vindo ao Trampos Fácil! Somos uma equipe de estudantes do curso de Desenvolvimento Full Stack do Senac Bauru,
            unindo esforços para criar uma plataforma inovadora que facilita a busca por empregos na nossa cidade.
            Nosso objetivo é conectar candidatos a oportunidades de trabalho de forma eficiente e segura.</h2>
        </div>
        <div className="imagemsobrenos"></div>
      </div>

      <div className="sobrenoscontainer2">
        
        <div className="container-2-1">
        
        <div className="imagemcontainer-2-1"></div>
        <div className="nossamissao-2-1"><h2>Nossa <span className="missao"> Missão</span> </h2></div>
        <div className="textocontainer-2-1">
          <h3>Facilitar o acesso a oportunidades de emprego para os cidadãos,
            promovendo uma experiência intuitiva e segura tanto para os candidatos quanto para as empresas.</h3>
        </div>
        </div>

        <div className="container-2-2">
        
        <div className="imagemcontainer-2-2"></div>
        <div className="nossamissao-2-2"><h2>Nossa <span className="visao">Visão</span></h2></div>
        <div className="textocontainer-2-2">
          <h3>Ser a principal plataforma de busca de emprego em Bauru, reconhecida pela sua
          eficácia e impacto positivo na comunidade </h3></div>
        </div>

      </div>


      <div className="sobrenostitulo2">
        <h1>Nossos <span className="valores">Valores</span></h1>
      </div>


      <div className="sobrenoscontainer3">
        
        
        <div className="container-3-1">
        
        <div className="imagemcontainer-3-1"></div>
        <div className="nossamissao-3-1"> Inovação </div>
        <div className="textocontainer-3-1">
          <h3>Buscamos constantemente melhorias e soluções criativas.</h3>
        </div>
        </div>

        <div className="container-3-2">
        
        <div className="imagemcontainer-3-2"></div>
        <div className="nossamissao-3-2"> Transparência</div>
        <div className="textocontainer-3-2">
          <h3> Valorizamos a honestidade e a clareza em todas as interações </h3>
        </div>
        </div>

        <div className="container-3-3">
        
        <div className="imagemcontainer-3-3"></div>
        <div className="nossamissao-3-3"> Inclusão </div>
        <div className="textocontainer-3-3"><h3> Acreditamos que todos merecem acesso a oportunidades justas </h3>
        </div>
        </div>

      </div>


      <div className="sobrenostitulo3">
        <h1>Nossa <span className="equipe">Equipe</span></h1>

      </div>

      <div className="sobrenostitulo4">
        <h1>Impacto <span className="esperado">Esperado</span></h1>
      </div>

      <div className="textoimpacto">
        <h2 className="textodoimpacto">O Trampo Fácil tem o potencial de revolucionar a forma como os bauruenses encontram emprego,
          contribuindo para a redução do desemprego local e promovendo o desenvolvimento econômico da região.</h2>
      </div>


      < Rodape />
    </div>
  );
}

export default Quemsomos;

