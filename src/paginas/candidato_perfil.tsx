//Importes do React
//Importes do Router-Dom
//Importes de Icones
//Importes de CSS
import "../estilo/candidato_perfil.css";
//Importes de Paginas

function CandidatoPerfil() {
  return (
    <div className="Container">
      <div className="ContentWrapper">
        <div className="MainContent">

          <div className="AreaBio">
            <h2 className="NomeCompleto">Nome Completo</h2>

            <br />
            <textarea id="biografia" name="bio" placeholder="Escreva sua biografia aqui..."></textarea>
          </div>

          <div className="InfoContatos">
            <h2 className="InfoContatosH2">Informações de Contato</h2>
            <p>Email</p>
            <p>Telefone</p>
            <p>Endereço</p>
          </div>


          <br />

          <div className="AnexarCurriculo">
            <h2>Currículo</h2>
            <p>Anexar</p>
          </div>
          <br />

          <div className="UltimoEmprego">
            <h2 className="UltimoEmpregoH2">Último Emprego</h2>
          </div>

          <br />

          <div className="Educação">
            <h2 className="EducaçãoH2">Educação</h2>
          </div>

          <br />

          <div className="Habilidades">
            <h2 className="HabilidadesH2">Habilidades</h2>
          </div>

          <br />

          <div className="Certificações">
            <h2 className="CertificaçãoH2">Certificações</h2>
          </div>

          <br />

          <div className="Cursos">
            <h2 className="CursosH2">Cursos</h2>

          </div>

          <br />

          <div className="ÁreasInteresse">
            <h2 className="InteressesH2">Áreas de Interesse</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidatoPerfil;
