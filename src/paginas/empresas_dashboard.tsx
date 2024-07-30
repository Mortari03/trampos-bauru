//Importes do React
import React, { useState } from "react";
//Importes do Router-Dom
import { Link } from "react-router-dom";
//Importes de Icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClipboardList,
  faUsers,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
//Importes de CSS
import "../estilo/empresa_dashboard.css";
//Importes de Paginas
import Cabecalho_Empresa from "../componentes/cabecalho_empresa";
import EmpresasCadastrarVagas from "./empresas_cadastrar_vagas";
import EmpresasPerfil from "./empresas_perfil";
import EmpresasConfiguracao from "./empresas_configuracao";
import EmpresasVagas from "./empresas_vagas";

const Empresas_Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("perfil");
  const [submenuVisible, setSubmenuVisible] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setSubmenuVisible(submenuVisible === menu ? null : menu);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "cadastrar":
        return <EmpresasCadastrarVagas />;
      case "verVagas":
        return <EmpresasVagas />;
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
    <div>
      <Cabecalho_Empresa />
      <div className="company-dashboard">
        <aside className="sidebar">
          <div className="logo-container">
            <img
              src="/img/Logo.png"
              alt="Logo Trampos Facil"
              className="logo"
            />
          </div>
          <nav className="menu">
            <div className="menu-group">
              <button onClick={() => toggleSubmenu("perfil")}>
                <FontAwesomeIcon icon={faUser} /> Perfil
              </button>
              {submenuVisible === "perfil" && (
                <div className="submenu">
                  <button onClick={() => setActiveSection("perfil")}>
                    Perfil da Empresa
                  </button>
                  <button onClick={() => setActiveSection("cadastrarRH")}>
                    Cadastrar Membros do RH
                  </button>
                </div>
              )}
            </div>
            <div className="menu-group">
              <button onClick={() => toggleSubmenu("vagas")}>
                <FontAwesomeIcon icon={faClipboardList} /> Vagas
              </button>
              {submenuVisible === "vagas" && (
                <div className="submenu">
                  <button onClick={() => setActiveSection("cadastrar")}>
                    Cadastrar Vagas
                  </button>
                  <button onClick={() => setActiveSection("verVagas")}>
                    Ver Vagas Cadastradas
                  </button>
                </div>
              )}
            </div>
            <div className="menu-group">
              <button onClick={() => toggleSubmenu("candidatos")}>
                <FontAwesomeIcon icon={faUsers} /> Candidatos
              </button>
              {submenuVisible === "candidatos" && (
                <div className="submenu">
                  <button onClick={() => setActiveSection("verCandidatos")}>
                    Ver Candidatos
                  </button>
                  <button
                    onClick={() => setActiveSection("agendarEntrevistas")}
                  >
                    Agendar Entrevistas
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => setActiveSection("configuracoes")}>
              <FontAwesomeIcon icon={faCog} /> Configurações
            </button>
            <Link to="/" className="logout-button">
              <FontAwesomeIcon icon={faSignOutAlt} /> Sair
            </Link>
          </nav>
        </aside>
        <main className="content">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Empresas_Dashboard;
