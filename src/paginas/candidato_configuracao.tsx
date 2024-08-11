//Importes do React
//Importes do Router-Dom
//Importes de Icones
//Importes de CSS
import "../estilo/candidato_configuracao.css";
//Importes de Paginas
import React, { useState } from "react";

function CandidatoConfiguracao() {
  const [editarPerfil, setEditarPerfil] = useState(false);
  const [alterarSenha, setAlterarSenha] = useState(false);
  const [preferenciasNotificacao, setPreferenciasNotificacao] = useState(false);
  const [privacidadeSeguranca, setPrivacidadeSeguranca] = useState(false);
  const [gerenciarAplicativos, setGerenciarAplicativos] = useState(false);
  const [idiomaRegiao, setIdiomaRegiao] = useState(false);

  const handleToggle = (section: string) => {
    switch (section) {
      case "editarPerfil":
        setEditarPerfil(!editarPerfil);
        break;
      case "alterarSenha":
        setAlterarSenha(!alterarSenha);
        break;
      case "preferenciasNotificacao":
        setPreferenciasNotificacao(!preferenciasNotificacao);
        break;
      case "privacidadeSeguranca":
        setPrivacidadeSeguranca(!privacidadeSeguranca);
        break;
      case "gerenciarAplicativos":
        setGerenciarAplicativos(!gerenciarAplicativos);
        break;
      case "idiomaRegiao":
        setIdiomaRegiao(!idiomaRegiao);
        break;
      default:
        break;
    }
  };

  return (
    <div className='configuracao-candidato'>
      <h1>Configurações da Conta</h1>
      <div className='configuracao-opcoes'>
        <button onClick={() => handleToggle("editarPerfil")}>Editar Perfil</button>
        {editarPerfil && <p>Conteúdo para editar perfil aqui.</p>}

        <button onClick={() => handleToggle("alterarSenha")}>Alterar Senha</button>
        {alterarSenha && <p>Conteúdo para alterar senha aqui.</p>}

        <button onClick={() => handleToggle("preferenciasNotificacao")}>
          Preferências de Notificação
        </button>
        {preferenciasNotificacao && (
          <p>Conteúdo para preferências de notificação aqui.</p>
        )}

        <button onClick={() => handleToggle("privacidadeSeguranca")}>
          Privacidade e Segurança
        </button>
        {privacidadeSeguranca && <p>Conteúdo para privacidade e segurança aqui.</p>}

        <button onClick={() => handleToggle("gerenciarAplicativos")}>
          Gerenciar Aplicativos Conectados
        </button>
        {gerenciarAplicativos && (
          <p>Conteúdo para gerenciar aplicativos conectados aqui.</p>
        )}

        <button onClick={() => handleToggle("idiomaRegiao")}>Idioma e Região</button>
        {idiomaRegiao && <p>Conteúdo para idioma e região aqui.</p>}
      </div>
    </div>
  );
}

export default CandidatoConfiguracao;
