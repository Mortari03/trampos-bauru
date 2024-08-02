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
            <input type="name" className="NomeCompleto" placeholder="Nome completo"/>

            <br />
            <textarea id="biografia" name="bio" placeholder="Escreva sua biografia aqui..."></textarea>
          </div>

          <div className="InfoContatos">
            <h2 className="InfoContatosH2">Informações de Contato</h2>

            <label htmlFor="email">Email:</label> <input type="email" id="email" />

            <label htmlFor="phone">Telefone:</label> <input   type="tel"/>


            <label htmlFor="address">Endereço:</label> <input
              type="text"
              id="address"
            />
          </div>

          <br />

          <div className="AnexarCurriculo">
            <h2>Currículo</h2>
            <label htmlFor="resume">Anexar currículo:</label>
            <input type="file" id="resume" />

          </div>
          <br />

          <div className="UltimoEmprego">
            <h2 className="UltimoEmpregoH2">Último Emprego</h2>
            <textarea id="BioEmprego" name="" placeholder="Descreva seu ultimo emprego..."></textarea>
          </div>

          <br />

          <div className="Educação">
            <h2 className="EducaçãoH2">Educação</h2>
            <textarea name="BioEducação" id="" placeholder="Qual seu nível academico?"></textarea>
          </div>

          <br />

          <div className="Habilidades">
            <h2 className="HabilidadesH2">Habilidades</h2>
            <textarea id="BioHabilidade" name="" placeholder="Quais são suas habilidades?"></textarea>
          </div>

          <br />

          <div className="Certificações">
            <h2 className="CertificaçãoH2">Certificações</h2>
            <label htmlFor="resume">Anexar certificações</label> <input type="file" id="resume" />
          </div>

          <br />

          <div className="Cursos">
            <h2 className="CursosH2">Cursos</h2>
            <textarea id="BioCursos" name="" placeholder="Tem algum curso? Quais são eles..."></textarea>
          </div>

          <br />

          <div className="ÁreasInteresse">
            <h2 className="InteressesH2">Áreas de Interesse</h2>
            <textarea id="BioEmprego" name="" placeholder="Descreva seu ultimo emprego..."></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidatoPerfil;
