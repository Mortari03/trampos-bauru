//Importes do React
//Importes do Router-Dom
//Importes de Icones
//Importes de CSS
import "../estilo/empresas_perfil.css";
//Importes de Paginas

function EmpresasPerfil() {
  return (
    <div className="conteiner_perfil_empresa">

      <div className="nome_empresa">
        <div id="logo"></div>
        <div className="h1_empresa">
          <h1>Nome da empresa</h1> 
        </div>
        <div className="icone_empresa">icone</div>     
      </div>

      <div className="wave-bar"></div>
      
      <div className="sobre_empresa">
        <h2>sobre</h2>
      </div>

      <div className="conteiner_visao">

        <div className="missao_empresa">
          <h2>Missão</h2>
          <p>Missão da Empresa</p>
        </div>

        <div className="visao_empresa">
          <h2>Visão</h2>
          <p>Visão da Empresa</p>
        </div>

        <div className="valores_empresa">
          <h2>Valores</h2>
          <p>Valores da Empresa</p>
        </div>

      </div>

      <div className="conteiner_setor">

        <div className="setor_empresa">
          <h2>Setor</h2>
          <p>Setor de Atuação</p>
        </div>

        <div className="tamanho_empresa">
          <h2>Tamanho</h2>
          <p>Quantidade de Funcionários</p>
        </div>

        <div className="fundacao">
          <h2>Fundação</h2>
          <p>Ano de Fundação</p>
        </div>

      </div>

      <div className="info_contato">

        <div className="informacao_contato">
          <h2>Informação de Contato</h2>
        </div>
        
      </div>
    </div>
  );
}

export default EmpresasPerfil;
