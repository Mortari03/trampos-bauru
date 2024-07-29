//Importes do React
//Importes do Router-Dom
//Importes de Icones
//Importes de CSS
import Rodape from "../componentes/rodape";
import "../estilo/candidato_perfil.css";
//Importes de Paginas

function CandidatoPerfil() {
  return (
    <div>
      <div className="Container">
        <div className="BordaEsquerda">
          <h3>Perfil</h3>
          <h3>Minhas vagas</h3>
          <h3>Entrevistas agendadas</h3>
          <h3>Configurações</h3>
          <h3>Sair</h3>
        </div>
        <div className="AreaBio">
          <h2>Nome Completo </h2>
        </div>
  
      </div>

      <div> <h2>Informações de Contato</h2>
      </div>

      <div>
        <h2>Currículo</h2>
      </div>

      <div>
        <h2> Último Emprego </h2>
      </div>


      <div>
      <h2> Educação </h2>      
       </div>
       
       <div>
       <h2> Habilidades </h2>
       </div>
       
       <div>
       <h2> Certificações </h2>
       </div>

       <div>
       <h2> Cursos </h2>
       </div>
      
      <div>
      <h2> Áreas de Interesse </h2>
      </div>





      < Rodape />
    </div>
  );
}

export default CandidatoPerfil;
