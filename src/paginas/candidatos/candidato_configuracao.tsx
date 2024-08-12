import React, { useState } from "react";
import "../../estilo/candidato_configuracao.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faBell,
  faShieldAlt,
  faCogs,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

function CandidatoConfiguracao() {
  const [alterarSenha, setAlterarSenha] = useState(false);
  const [preferenciasNotificacao, setPreferenciasNotificacao] = useState(false);
  const [privacidadeSeguranca, setPrivacidadeSeguranca] = useState(false);
  const [gerenciarAplicativos, setGerenciarAplicativos] = useState(false);
  const [idiomaRegiao, setIdiomaRegiao] = useState(false);

  const handleToggle = (section: string) => {
    switch (section) {
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
        <button onClick={() => handleToggle("alterarSenha")}>
          <FontAwesomeIcon icon={faLock} /> Alterar Senha
        </button>
        {alterarSenha && (
          <div className='configuracao-conteudo'>Aqui você pode alterar sua senha.</div>
        )}

        <button onClick={() => handleToggle("preferenciasNotificacao")}>
          <FontAwesomeIcon icon={faBell} /> Preferências de Notificação
        </button>
        {preferenciasNotificacao && (
          <div className='configuracao-conteudo'>
            Aqui você pode gerenciar suas preferências de notificação.
          </div>
        )}

        <button onClick={() => handleToggle("privacidadeSeguranca")}>
          <FontAwesomeIcon icon={faShieldAlt} /> Privacidade e Segurança
        </button>
        {privacidadeSeguranca && (
          <div className='configuracao-conteudo'>
            Aqui você pode ajustar suas configurações de privacidade e segurança.
          </div>
        )}

        <button onClick={() => handleToggle("gerenciarAplicativos")}>
          <FontAwesomeIcon icon={faCogs} /> Gerenciar Aplicativos
        </button>
        {gerenciarAplicativos && (
          <div className='configuracao-conteudo'>
            Aqui você pode gerenciar os aplicativos conectados.
          </div>
        )}

        <button onClick={() => handleToggle("idiomaRegiao")}>
          <FontAwesomeIcon icon={faLanguage} /> Idioma e Região
        </button>
        {idiomaRegiao && (
          <div className='configuracao-conteudo'>
            Aqui você pode ajustar as configurações de idioma e região.
          </div>
        )}
      </div>
    </div>
  );
}

export default CandidatoConfiguracao;
