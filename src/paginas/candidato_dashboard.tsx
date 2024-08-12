import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faCog,
  faSignOutAlt,
  faCalendarAlt,
  faBars,
  faTimes,
  faHome,
  faSuitcase,
  faHeadset,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import "../estilo/candidato_dashboard.css";
import CandidatoPerfil from "./candidato_perfil";
import CandidatoVagas from "./candidato_minhas_vagas";
import CandidatoEntrevistasAgendadas from "./candidato_entrevistas_agendadas";
import CandidatoConfiguracao from "./candidato_configuracao";
import { useUsuario } from "../contexts/UsuarioContext";

function CandidatoDashboard() {
  const [secaoAtiva, setSecaoAtiva] = useState<string>("perfil");
  const [menuAberto, setMenuAberto] = useState<boolean>(false);
  const { userInfo } = useUsuario();

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
        return null;
    }
  };

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className='CD-dashboard'>
      <div className='CD-header'>
        <div className='CD-headerContainer'>
          <img
            className='CD-logo'
            src='/img/Logo.png'
            alt='Logo'
          />
          <button
            className='CD-menuToggle'
            onClick={alternarMenu}
          >
            <FontAwesomeIcon icon={menuAberto ? faTimes : faBars} />
          </button>
          <div className={`CD-navContainer ${menuAberto ? "CD-active" : ""}`}>
            <nav>
              <ul className='CD-headerNav'>
                <li>
                  <strong className='CD-menu'>
                    <Link to='/'>
                      <FontAwesomeIcon
                        icon={faHome}
                        className='CD-icone'
                      />
                      TRAMPOS
                    </Link>
                  </strong>
                </li>
                <li>
                  <strong className='CD-menu'>
                    <Link to='/carreiras'>
                      <FontAwesomeIcon
                        icon={faSuitcase}
                        className='CD-icone'
                      />
                      CARREIRAS
                    </Link>
                  </strong>
                </li>
                <li className='CD-dropdown'>
                  <strong className='CD-menu'>
                    <Link to='/quemsomos'>
                      <FontAwesomeIcon
                        icon={faPeopleArrows}
                        className='CD-icone'
                      />
                      Quem Somos
                    </Link>
                  </strong>
                </li>
                <li>
                  <strong className='CD-menu'>
                    <Link to='/suporte'>
                      <FontAwesomeIcon
                        icon={faHeadset}
                        className='CD-icone'
                      />
                      SUPORTE
                    </Link>
                  </strong>
                </li>
              </ul>
            </nav>
          </div>
          <button
            className='CD-profileButton'
            onClick={alternarMenu}
          >
            <img
              src={userInfo.foto}
              alt='Perfil'
              className='CD-profileImage'
            />
          </button>
        </div>
      </div>

      <div
        className={`CD-overlay ${menuAberto ? "CD-show" : ""}`}
        onClick={alternarMenu}
      ></div>
      <div className='CD-main'>
        <aside className={`CD-sidebar ${menuAberto ? "CD-open" : ""}`}>
          <button
            className='CD-closeSidebar'
            onClick={alternarMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <nav className='CD-sidebarNav'>
            <div className='CD-userInfo'>
              <img
                src={userInfo.foto}
                alt='Perfil'
                className='CD-sidebarProfileImage'
              />
              <p className='CD-username'>{userInfo.nome}</p>
            </div>
            <button
              className='CD-sidebarButton'
              onClick={() => {
                setSecaoAtiva("perfil");
                alternarMenu();
              }}
            >
              <FontAwesomeIcon icon={faClipboardList} /> Meu Perfil
            </button>
            <button
              className='CD-sidebarButton'
              onClick={() => {
                setSecaoAtiva("minhasVagas");
                alternarMenu();
              }}
            >
              <FontAwesomeIcon icon={faClipboardList} /> Minhas Vagas
            </button>
            <button
              className='CD-sidebarButton'
              onClick={() => {
                setSecaoAtiva("entrevistas");
                alternarMenu();
              }}
            >
              <FontAwesomeIcon icon={faCalendarAlt} /> Entrevistas Agendadas
            </button>
            <button
              className='CD-sidebarButton'
              onClick={() => {
                setSecaoAtiva("configuracoes");
                alternarMenu();
              }}
            >
              <FontAwesomeIcon icon={faCog} /> Configurações
            </button>
            <Link
              to='/'
              className='CD-sidebarButton CD-logout'
              onClick={alternarMenu}
            >
              <FontAwesomeIcon icon={faSignOutAlt} /> Sair
            </Link>
          </nav>
        </aside>
        <main className='CD-content'>{renderizarConteudo()}</main>
      </div>
    </div>
  );
}

export default CandidatoDashboard;
