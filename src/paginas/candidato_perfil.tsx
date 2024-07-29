//Importes do React
//Importes do Router-Dom
//Importes de Icones
//Importes de CSS
import Rodape from "../componentes/rodape";
import "../estilo/candidato_perfil.css";
//Importes de Paginas

function CandidatoPerfil() {
  return (
    <div className="Container">
    <div className="BordaEsquerda">
      <br />
      <h3>Perfil</h3>
      <br />
      <h3>Minhas vagas</h3>
      <br />
      <h3>Entrevistas agendadas</h3>
      <br />
      <h3>Configurações</h3>
      <br />
      <h3>Sair</h3>
    </div>
    <div className="ContentWrapper">
      <div className="MainContent">
        <div className="AreaBio">
          <h2>Nome Completo</h2>
        </div>
        <div className="Section">
          <h2>Informações de Contato</h2>
        </div>
        <div className="Section">
          <h2>Currículo</h2>
        </div>
        <div className="Section">
          <h2>Último Emprego</h2>
        </div>
        <div className="Section">
          <h2>Educação</h2>
        </div>
        <div className="Section">
          <h2>Habilidades</h2>
        </div>
        <div className="Section">
          <h2>Certificações</h2>
        </div>
        <div className="Section">
          <h2>Cursos</h2>
        </div>
        <div className="Section">
          <h2>Áreas de Interesse</h2>
        </div>
      </div>
      <Rodape />
    </div>
  </div>
);
}


export default CandidatoPerfil;
