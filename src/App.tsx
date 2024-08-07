//Importes do React
import React from "react";
//Importes do Router-Dom
import { Routes, Route } from "react-router-dom";
//Importes de Icones
//Importes de CSS
import "./estilo/cabecalho.css";
//Importes de Paginas
import Trampos from "./paginas/trampos";
import Carreiras from "./paginas/carreiras";
import ParaEmpresas from "./paginas/para_empresa";
import ParaCandidato from "./paginas/para_candidato";
import Suporte from "./paginas/suporte";
import PreLogin from "./paginas/prelogin";
import LoginEmpresa from "./paginas/login_empresa";
import LoginCandidato from "./paginas/login_candidato";
import CadastroCandidatos from "./paginas/cadastro_candidato";
import CadastroEmpresa from "./paginas/cadastro_empresa";
import Senha from "./paginas/esqueci_senha";
import CandidatoVagas from "./paginas/candidato_minhas_vagas";
import CandidatoPerfil from "./paginas/candidato_perfil";
import CandidatoConfiguracao from "./paginas/candidato_configuracao";
import CandidatoEntrevistasAgendadas from "./paginas/candidato_entrevistas_agendadas";
import EmpresasPerfil from "./paginas/empresas_perfil";
import EmpresasConfiguracao from "./paginas/empresas_configuracao";
import CabecalhoEmpresa from "./componentes/cabecalho_empresa";
import CabecalhoCandidato from "./componentes/cabecalho_candidato";
import CandidatoDashboard from "./paginas/candidato_dashboard";
import EmpresasDashboard from "./paginas/empresas_dashboard";
import EmpresasVerVagas from "./paginas/empresas_ver_vagas";
import EmpresaPerfilEditar from "./paginas/empresa_perfil_editar";
import Quemsomos from "./paginas/quemsomos";
import PoliticaDePrivacidade from "./paginas/politicadeprivacidade";
import AvisoLegal from "./paginas/avisolegal";

function App() {
  return (
    <div>
      <Routes>
        {/* Rotas do Menu */}
        <Route
          path='/'
          element={<Trampos />}
        />
        <Route
          path='/carreiras'
          element={<Carreiras />}
        />
        <Route
          path='/suporte'
          element={<Suporte />}
        />

        {/* Rotas do Porque Nos ? */}
        <Route
          path='/quemsomos'
          element={<Quemsomos />}
        />
        <Route
          path='/paraempresas'
          element={<ParaEmpresas />}
        />
        <Route
          path='/paracandidatos'
          element={<ParaCandidato />}
        />

        {/* Rotas de Login */}
        <Route
          path='/prelogin'
          element={<PreLogin />}
        />
        <Route
          path='/login_empresa'
          element={<LoginEmpresa />}
        />
        <Route
          path='/login_candidato'
          element={<LoginCandidato />}
        />

        {/* Rotas de Cadastro */}
        <Route
          path='/cadastro_candidatos'
          element={<CadastroCandidatos />}
        />
        <Route
          path='/cadastro_empresas'
          element={<CadastroEmpresa />}
        />

        {/* Rota de Esqueci a Senha */}
        <Route
          path='/esqueci_senha'
          element={<Senha />}
        />

        {/* Rota de Perfil Candidatos */}
        <Route
          path='cabecalho_candidato'
          element={<CabecalhoCandidato />}
        />
        <Route
          path='/candidato_dashboard'
          element={<CandidatoDashboard />}
        />
        <Route
          path='/candidato_vagas'
          element={<CandidatoVagas />}
        />
        <Route
          path='/candidato_entrevistas'
          element={<CandidatoEntrevistasAgendadas />}
        />
        <Route
          path='/candidato_perfil'
          element={<CandidatoPerfil />}
        />
        <Route
          path='/candidato_configuracao'
          element={<CandidatoConfiguracao />}
        />

        {/* Rota de Perfil Empresa */}
        <Route
          path='/cabecalho_empresa'
          element={<CabecalhoEmpresa />}
        />
        <Route
          path='/empresa_dashboard'
          element={<EmpresasDashboard />}
        />
        <Route
          path='/empresa_perfil'
          element={<EmpresasPerfil />}
        />
        <Route
          path='/empresa_vagas_cadastradas'
          element={<EmpresasVerVagas />}
        />
        <Route
          path='/empresa_perfil_editar'
          element={<EmpresaPerfilEditar />}
        />
        <Route
          path='/empresa_configuracao'
          element={<EmpresasConfiguracao />}
        />
        {/* Rota de Politicas de Privacidades e outras leis */}
        <Route
          path='/politica_privacidade'
          element={<PoliticaDePrivacidade />}
        />
        <Route
          path='/aviso_legal'
          element={<AvisoLegal />}
        />
      </Routes>
    </div>
  );
}

export default App;
