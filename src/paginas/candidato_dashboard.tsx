import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClipboardList,
  faCog,
  faSignOutAlt,
  faCalendarAlt,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../estilo/candidato_dashboard.css";
import CabecalhoCandidato from "../componentes/cabecalho_candidato";
import Rodape from "../componentes/rodape";
import CandidatoPerfil from "./candidato_perfil";
import CandidatoVagas from "./candidato_minhas_vagas";
import CandidatoEntrevistasAgendadas from "./candidato_entrevistas_agendadas";
import CandidatoConfiguracao from "./candidato_configuracao";

function CandidatoDashboard() {
  const [secaoAtiva, setSecaoAtiva] = useState<string>("perfil");
  const [menuAberto, setMenuAberto] = useState<boolean>(false);

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

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div>
      <CabecalhoCandidato />
      <button
        className='cd-alternar-menu'
        onClick={alternarMenu}
      >
        <FontAwesomeIcon icon={menuAberto ? faTimes : faBars} />
      </button>
      <div
        className={`cd-overlay ${menuAberto ? "cd-show" : ""}`}
        onClick={alternarMenu}
      ></div>
      <div className='cd-dashboard'>
        <aside className={`cd-menu-lateral ${menuAberto ? "cd-open" : ""}`}>
          <button
            className='cd-fechar-menu'
            onClick={alternarMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <nav className='cd-menu'>
            <button
              className='cd-menu-botao'
              onClick={() => {
                setSecaoAtiva("perfil");
                alternarMenu();
              }}
            >
              <FontAwesomeIcon icon={faUser} /> Meu Perfil
            </button>
            <button
              className='cd-menu-botao'
              onClick={() => {
                setSecaoAtiva("minhasVagas");
                alternarMenu();
              }}
            >
              <FontAwesomeIcon icon={faClipboardList} /> Minhas Vagas
            </button>
            <button
              className='cd-menu-botao'
              onClick={() => {
                setSecaoAtiva("entrevistas");
                alternarMenu();
              }}
            >
              <FontAwesomeIcon icon={faCalendarAlt} /> Entrevistas Agendadas
            </button>
            <button
              className='cd-menu-botao'
              onClick={() => {
                setSecaoAtiva("configuracoes");
                alternarMenu();
              }}
            >
              <FontAwesomeIcon icon={faCog} /> Configurações
            </button>
            <Link
              to='/'
              className='cd-menu-botao cd-sair'
              onClick={alternarMenu}
            >
              <FontAwesomeIcon icon={faSignOutAlt} /> Sair
            </Link>
          </nav>
        </aside>
        <main className='cd-conteudo'>{renderizarConteudo()}</main>
      </div>
      <Rodape />
    </div>
  );
}

export default CandidatoDashboard;
