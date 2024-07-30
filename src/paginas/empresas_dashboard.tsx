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
import EmpresasVerVagas from "./empresas_ver_vagas";
import Rodape from "../componentes/rodape";

function EmpresaDashboard() {
  const [SessaoAtiva, setSessaoAtiva] = useState<string>("perfil");
  const [submenuVisivel, setsubmenuVisivel] = useState<string | null>(null);

  const alternarSubmenu = (menu: string) => {
    setsubmenuVisivel(submenuVisivel === menu ? null : menu);
  };

  const rendeConteudo = () => {
    switch (SessaoAtiva) {
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
              <button onClick={() => alternarSubmenu("perfil")}>
                <FontAwesomeIcon icon={faUser} /> Perfil
              </button>
              {submenuVisivel === "perfil" && (
                <div className="submenu">
                  <button onClick={() => setSessaoAtiva("perfil")}>
                    Perfil da Empresa
                  </button>
                </div>
              )}
            </div>
            <div className="menu-group">
              <button onClick={() => alternarSubmenu("vagas")}>
                <FontAwesomeIcon icon={faClipboardList} /> Vagas
              </button>
              {submenuVisivel === "vagas" && (
                <div className="submenu">
                  <button onClick={() => setSessaoAtiva("cadastrar")}>
                    Cadastrar Vagas
                  </button>
                  <button onClick={() => setSessaoAtiva("verVagas")}>
                    Ver Vagas Cadastradas
                  </button>
                </div>
              )}
            </div>
            <div className="menu-group">
              <button onClick={() => alternarSubmenu("candidatos")}>
                <FontAwesomeIcon icon={faUsers} /> Candidatos
              </button>
              {submenuVisivel === "candidatos" && (
                <div className="submenu">
                  <button onClick={() => setSessaoAtiva("verCandidatos")}>
                    Ver Candidatos
                  </button>
                  <button onClick={() => setSessaoAtiva("agendarEntrevistas")}>
                    Agendar Entrevistas
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => setSessaoAtiva("configuracoes")}>
              <FontAwesomeIcon icon={faCog} /> Configurações
            </button>
            <Link to="/" className="logout-button">
              <FontAwesomeIcon icon={faSignOutAlt} /> Sair
            </Link>
          </nav>
        </aside>
        <main className="content">{rendeConteudo()}</main>
      </div>
      <Rodape />
    </div>
  );
}

export default EmpresaDashboard;
