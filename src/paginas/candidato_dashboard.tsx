//Importes do React
import React, { useState } from "react";
//Importes do Router-Dom
import { Link } from "react-router-dom";
//Importes de Icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClipboardList,
  faCog,
  faSignOutAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
//Importes de CSS
import "../estilo/candidato_dashboard.css";
//Importes de Paginas
import CabecalhoCandidato from "../componentes/cabecalho_candidato";
import Rodape from "../componentes/rodape";
import CandidatoPerfil from "./candidato_perfil";
import CandidatoVagas from "./candidato_minhas_vagas";
import CandidatoEntrevistasAgendadas from "./candidato_entrevistas_agendadas";
import CandidatoConfiguracao from "./candidato_configuracao";

function CandidatoDashboard() {
  const [secaoAtiva, setSecaoAtiva] = useState<string>("perfil");

  const renderizarConteudo = () => {
    switch (secaoAtiva) {
      case "perfil":
        return <CandidatoPerfil />;
      case "minhasVagas":
        return <CandidatoVagas />;
      case "entrevistas":
        return <CandidatoEntrevistasAgendadas />;
      case "configuracoes":
        return <CandidatoConfiguracao />;
      default:
        return <h2>Bem-vindo ao seu painel!</h2>;
    }
  };

  return (
    <div>
      <CabecalhoCandidato />
      <div className='dashboard-usuario'>
        <aside className='menu-lateral-usuario'>
          <div className='logo-container-usuario'>
          </div>
          <nav className='menu-usuario'>
            <button onClick={() => setSecaoAtiva("perfil")}>
              <FontAwesomeIcon icon={faUser} /> Meu Perfil
            </button>
            <button onClick={() => setSecaoAtiva("minhasVagas")}>
              <FontAwesomeIcon icon={faClipboardList} /> Minhas Vagas
            </button>
            <button onClick={() => setSecaoAtiva("entrevistas")}>
              <FontAwesomeIcon icon={faCalendarAlt} /> Entrevistas Agendadas
            </button>
            <button onClick={() => setSecaoAtiva("configuracoes")}>
              <FontAwesomeIcon icon={faCog} /> Configurações
            </button>
            <Link
              to='/'
              className='botao-logout-usuario'
            >
              <FontAwesomeIcon icon={faSignOutAlt} /> Sair
            </Link>
          </nav>
        </aside>
        <main className='conteudo'>{renderizarConteudo()}</main>
      </div>
      <Rodape />
    </div>
  );
}

export default CandidatoDashboard;
