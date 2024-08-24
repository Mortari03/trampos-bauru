import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClipboardList,
  faUsers,
  faCog,
  faSignOutAlt,
  faTimes,
  faHome,
  faPlus, // Adicionando ícones para os submenus
  faEye, 
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import "../../estilo/empresa_dashboard.css";
import EmpresasCadastrarVagas from "./empresas_cadastrar_vagas";
import EmpresasVerVagas from "./empresas_ver_vagas";
import EmpresasPerfil from "./empresas_perfil";
import EmpresasConfiguracao from "./empresas_configuracao";

function EmpresaDashboard() {
  const [sessaoAtiva, setSessaoAtiva] = useState<string>("perfil");
  const [submenuVisivel, setSubmenuVisivel] = useState<string | null>(null);
  const [menuAberto, setMenuAberto] = useState<boolean>(false);

  const alternarSubmenu = (menu: string) => {
    setSubmenuVisivel(submenuVisivel === menu ? null : menu);
  };

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const renderizarConteudo = () => {
    switch (sessaoAtiva) {
      case "cadastrar":
        return <EmpresasCadastrarVagas />;
      case "verVagas":
        return <EmpresasVerVagas />;
      case "perfil":
        return <EmpresasPerfil />;
      case "verCandidatos":
        return <h2>Ver Candidatos</h2>;
      case "agendarEntrevistas":
        return <h2>Agendar Entrevistas</h2>;
      case "configuracoes":
        return <EmpresasConfiguracao />;
      default:
        return <h2>Bem-vindo ao painel da empresa!</h2>;
    }
  };

  return (
    <div className='ED-dashboard'>
      <header className='ED-header'>
        <div className='ED-headerContainer'>
          <Link className='ED-logo' to='/'>
            <img src='/img/Logo.png' alt='Logo Trampos Facil' />
          </Link>
          <button className='ED-menuToggle' onClick={alternarMenu}>
            <FontAwesomeIcon icon={faHome} />
          </button>
          <div className={`ED-navContainer ${menuAberto ? "ED-active" : ""}`}>
            <nav>
              <ul className='ED-headerNav'>
                <li>
                  <Link to='/'>
                    <FontAwesomeIcon icon={faHome} className='ED-icone' />
                    Início
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <button className='ED-profileButton' onClick={alternarMenu}>
            <img src='/img/default-profile.png' alt='Perfil' className='ED-profileImage' />
          </button>
        </div>
      </header>

      <div className={`ED-overlay ${menuAberto ? "ED-show" : ""}`} onClick={alternarMenu}></div>
      
      <aside className={`ED-sidebar ${menuAberto ? "ED-open" : ""}`}>
        <button className='ED-closeSidebar' onClick={alternarMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <nav className='ED-sidebarNav'>
          <div className='ED-menu-group'>
            <button className='ED-sidebarButton' onClick={() => setSessaoAtiva("perfil")}>
              <FontAwesomeIcon icon={faUser} /> Perfil
            </button>
          </div>
          <div className='ED-menu-group'>
            <button className='ED-sidebarButton' onClick={() => alternarSubmenu("vagas")}>
              <FontAwesomeIcon icon={faClipboardList} /> Vagas
            </button>
            {submenuVisivel === "vagas" && (
              <div className='ED-submenu'>
                <button onClick={() => setSessaoAtiva("cadastrar")}>
                  <FontAwesomeIcon icon={faPlus} /> Cadastrar Vagas
                </button>
                <button onClick={() => setSessaoAtiva("verVagas")}>
                  <FontAwesomeIcon icon={faEye} /> Ver Vagas Cadastradas
                </button>
              </div>
            )}
          </div>
          <div className='ED-menu-group'>
            <button className='ED-sidebarButton' onClick={() => alternarSubmenu("candidatos")}>
              <FontAwesomeIcon icon={faUsers} /> Candidatos
            </button>
            {submenuVisivel === "candidatos" && (
              <div className='ED-submenu'>
                <button onClick={() => setSessaoAtiva("verCandidatos")}>
                  <FontAwesomeIcon icon={faEye} /> Ver Candidatos
                </button>
                <button onClick={() => setSessaoAtiva("agendarEntrevistas")}>
                  <FontAwesomeIcon icon={faCalendarAlt} /> Agendar Entrevistas
                </button>
              </div>
            )}
          </div>
          <button className='ED-sidebarButton' onClick={() => setSessaoAtiva("configuracoes")}>
            <FontAwesomeIcon icon={faCog} /> Configurações
          </button>
          <Link to='/' className='ED-sidebarButton ED-logout' onClick={alternarMenu}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Sair
          </Link>
        </nav>
      </aside>
      
      <main className='ED-content'>
        {renderizarConteudo()}
      </main>
    </div>
  );
}

export default EmpresaDashboard;
